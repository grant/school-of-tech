package auth

import (
	"github.com/gorilla/securecookie"
	"net/http"
	"github.com/grant/CSE-The-Game/cse-the-game/models"
	"github.com/Sirupsen/logrus"
	"encoding/gob"
)

const REDIRECT_URL = "/login"
const COOKIE_SESSION = "session"

var cookieHandler = securecookie.New(
	securecookie.GenerateRandomKey(64),
	securecookie.GenerateRandomKey(32),
)

func init() {
	gob.Register(models.Session{})
}

func SetSession(username string, w http.ResponseWriter) {
	value := models.Session{
		Username: username,
	}
	if encoded, err := cookieHandler.Encode(COOKIE_SESSION, value); err == nil {
		cookie := &http.Cookie{
			Name: COOKIE_SESSION,
			Value: encoded,
			Path: "/",
		}
		http.SetCookie(w, cookie)
	}
}

func ClearSession(w http.ResponseWriter) {
	cookie := &http.Cookie{
		Name: COOKIE_SESSION,
		Value: "",
		Path: "/",
		MaxAge: -1,
	}
	http.SetCookie(w, cookie)
}

func GetSession(r *http.Request) (models.Session, error) {
	var err error
	if cookie, err := r.Cookie(COOKIE_SESSION); err == nil {
		cookieValue := models.Session{}
		if err = cookieHandler.Decode(COOKIE_SESSION, cookie.Value, &cookieValue); err == nil {
			return cookieValue, nil
		} else {
			logrus.Error(err)
		}
	}
	return models.Session{}, err
}

func AuthenicationHandler(inner http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if IsAuthenticated(r) {
			inner.ServeHTTP(w, r)
		} else {
			http.Redirect(w, r, REDIRECT_URL, http.StatusFound)
		}
	})
}

func IsAuthenticated(r *http.Request) bool {
	session, err := GetSession(r)
	return err == nil && session.Username != ""
}