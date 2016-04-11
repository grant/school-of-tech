package routing

import (
	"github.com/gorilla/mux"
	"github.com/googollee/go-socket.io"
	"github.com/grant/CSE-The-Game/cse-the-game/ws"
	"github.com/Sirupsen/logrus"
	"github.com/grant/CSE-The-Game/cse-the-game/auth"
	"net/http"
)

func NewRouter() *mux.Router {
	// Setup websocket server
	io, err := socketio.NewServer(nil)
	if err != nil {
		logrus.Fatal(err)
	}
	wsEventHandlers := make(map[string]ws.SocketHandler)

	// Create mux router
	router := mux.NewRouter().StrictSlash(true)

	// Add routes
	for _, route := range routes {
		// Apply middleware
		var handler http.Handler = route.HandlerFunc
		if route.AuthenticationRequired {
			handler = auth.AuthenicationHandler(route.HandlerFunc)
		}
		handler = HTTPLogger(handler)

		// Setup router methods
		switch route.Type {
		case File:
			router.Methods(route.Method).Path(route.Path).Handler(handler)
		case Directory:
			router.Methods(route.Method).PathPrefix(route.PathPrefix).Handler(handler)
		case Ws:
			if ws.IsSocketIOEvent(route.Path) {
				wsEventHandlers[route.Path] = route.Handler
			}
		}
	}

	// Setup socket.io routes
	io.On(ws.Connection, func(so socketio.Socket) {
		if wsEventHandlers[ws.Connection] != nil {
			wsEventHandlers[ws.Connection](so, nil)
		}

		for _, route := range routes {
			if !ws.IsSocketIOEvent(route.Path) {
				so.On(route.Path, func(i interface{}) {
					route.Handler(so, i)
				})
			}
		}
	})
	io.On(ws.Error, func(so socketio.Socket, err error) {
		if wsEventHandlers[ws.Error] != nil {
			wsEventHandlers[ws.Error](so, err)
		}
		logrus.Println("error:", err)
	})
	router.Path(ws.URL).Handler(io)

	return router
}