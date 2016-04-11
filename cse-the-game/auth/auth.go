package auth

import (
	"net/http"
	"github.com/grant/CSE-The-Game/cse-the-game/models"
	"golang.org/x/crypto/bcrypt"
)

// Methods

func Login(username string, password string, w http.ResponseWriter) bool {
	// check credentials
	if IsValidUsernamePassword(username, password) {
		SetSession(username, w)
		return true
	}
	return false
}

func Logout(w http.ResponseWriter) {
	ClearSession(w)
}

func HashedPassword(password string) ([]byte, error) {
	return bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
}

// Checks

func IsAuthenticated(r *http.Request) bool {
	session, err := GetSession(r)
	return err == nil && session.Username != ""
}

func IsValidUsernamePassword(username string, password string) bool {
	user, err := models.GetUserByUsername(username)
	if err != nil {
		return false
	}

	// Comparing the password with the hash
	err = bcrypt.CompareHashAndPassword([]byte(user.HashedPassword), []byte(password))
	return err == nil // nil means match
}
