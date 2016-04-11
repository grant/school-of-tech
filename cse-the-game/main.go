package main

import (
	"github.com/Sirupsen/logrus"
	"github.com/grant/CSE-The-Game/cse-the-game/db"
	"github.com/grant/CSE-The-Game/cse-the-game/models"
	"github.com/grant/CSE-The-Game/cse-the-game/routing"
	"net/http"
	"os"
)

func main() {
	// Setup logger
	logrus.SetFormatter(&logrus.TextFormatter{})
	logrus.SetOutput(os.Stderr)
	logrus.SetLevel(logrus.DebugLevel)

	// Setup router
	router := routing.NewRouter()

	// Setup port
	port := os.Getenv("PORT")
	if port == "" {
		logrus.Fatal("$PORT must be set")
	}

	// Setup postgres
	db.SetupDb(models.GetModels())

	// Setup server
	logrus.Println("Running on http://localhost:" + port)
	logrus.Fatal(http.ListenAndServe(":"+port, router))
}
