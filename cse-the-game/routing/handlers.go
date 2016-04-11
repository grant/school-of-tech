package routing

import (
	"net/http"
	"github.com/grant/CSE-The-Game/cse-the-game/models"
	"github.com/Sirupsen/logrus"
	"github.com/googollee/go-socket.io"
)

type RouteHandler struct{}

func (h RouteHandler) Index(w http.ResponseWriter, r *http.Request) {
	http.FileServer(http.Dir("." + STATIC_DIR + "views/")).ServeHTTP(w, r)
}

func (h RouteHandler) Db(w http.ResponseWriter, r *http.Request) {
	users := models.GetAllUsers()
	toJSON(w, users)
}

func (h RouteHandler) WebsocketConnect(so socketio.Socket, i interface{}) {
	logrus.Println("connection!")
}

func (h RouteHandler) Static(w http.ResponseWriter, r *http.Request) {
	http.StripPrefix(STATIC_DIR, http.FileServer(http.Dir("." + STATIC_DIR))).ServeHTTP(w, r)
}