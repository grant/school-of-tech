package routing

import (
	"net/http"
	"github.com/grant/CSE-The-Game/cse-the-game/models"
	"github.com/Sirupsen/logrus"
	"github.com/googollee/go-socket.io"
	"github.com/grant/CSE-The-Game/cse-the-game/auth"
	"github.com/golang/go/src/pkg/fmt"
)

type RouteHandler struct{}

func (h RouteHandler) Index(w http.ResponseWriter, r *http.Request) {
	http.FileServer(http.Dir("." + STATIC_DIR + "views/")).ServeHTTP(w, r)
}

func (h RouteHandler) Db(w http.ResponseWriter, r *http.Request) {
	users, _ := models.GetAllUsers()
	toJSON(w, users)
}

func (h RouteHandler) Login(w http.ResponseWriter, r *http.Request) {
	username := r.FormValue("username")
	password := r.FormValue("password")
	redirectTarget := "/"
	if username != "" && password != "" {
		successful := auth.Login(username, password, w)
		logrus.Infoln("User", username, "logged in successfully?", successful)
	} else {
		logrus.Error("username or password not provided")
	}
	http.Redirect(w, r, redirectTarget, http.StatusFound)
}

func (h RouteHandler) Logout(w http.ResponseWriter, r *http.Request) {
	auth.Logout(w)
	http.Redirect(w, r, "/", http.StatusFound)
}

func (h RouteHandler) Signup(w http.ResponseWriter, r *http.Request) {
	email := r.FormValue("email")
	username := r.FormValue("username")
	password := r.FormValue("password")

	// Check if user exists with username or email
	if _, err := models.GetUserByUsername(username); err == nil {
		http.Redirect(w, r, "/", http.StatusFound)
	}
	if _, err := models.GetUserByEmail(email); err == nil {
		http.Redirect(w, r, "/", http.StatusFound)
	}

	// Create user
	hashedPassword, err := auth.HashedPassword(password)
	if err != nil {
		logrus.Error("Bad password hash", password, err)
	}
	user := models.User{
		Email: email,
		Username: username,
		HashedPassword: hashedPassword,
	}
	models.CreateUser(user)
	logrus.Infoln("Created user", username)

	// Login the user
	auth.Login(username, password, w)

	// Redirect to home
	http.Redirect(w, r, "/", http.StatusFound)
}

func (h RouteHandler) WebsocketConnect(so socketio.Socket, i interface{}) {
	logrus.Println("connection!")
}

func (h RouteHandler) Static(w http.ResponseWriter, r *http.Request) {
	http.StripPrefix(STATIC_DIR, http.FileServer(http.Dir("." + STATIC_DIR))).ServeHTTP(w, r)
}

func (h RouteHandler) NotFound(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "404 -- page not found")
}