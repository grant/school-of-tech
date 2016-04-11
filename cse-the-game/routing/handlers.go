package routing

import (
	"net/http"
	"github.com/grant/CSE-The-Game/cse-the-game/models"
	"github.com/Sirupsen/logrus"
	"github.com/googollee/go-socket.io"
	"github.com/grant/CSE-The-Game/cse-the-game/auth"
)

type RouteHandler struct{}

func (h RouteHandler) Index(w http.ResponseWriter, r *http.Request) {
	http.FileServer(http.Dir("." + STATIC_DIR + "views/")).ServeHTTP(w, r)
}

func (h RouteHandler) Db(w http.ResponseWriter, r *http.Request) {
	users := models.GetAllUsers()
	toJSON(w, users)
}

func (h RouteHandler) Login(w http.ResponseWriter, r *http.Request) {
	username := r.FormValue("username")
	password := r.FormValue("password")
	redirectTarget := "/"
	if username != "" && password != "" {
		// check credentials
		auth.SetSession(username, w)
	} else {
		logrus.Error("username or password not provided")
	}
	http.Redirect(w, r, redirectTarget, 302)
}

func (h RouteHandler) Logout(w http.ResponseWriter, r *http.Request) {
	auth.ClearSession(w)
	http.Redirect(w, r, "/", 302)
}

func (h RouteHandler) WebsocketConnect(so socketio.Socket, i interface{}) {
	logrus.Println("connection!")
}

func (h RouteHandler) Static(w http.ResponseWriter, r *http.Request) {
	http.StripPrefix(STATIC_DIR, http.FileServer(http.Dir("." + STATIC_DIR))).ServeHTTP(w, r)
}