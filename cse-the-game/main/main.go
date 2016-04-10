package main

import (
	"net/http"
	"os"
	log "github.com/Sirupsen/logrus"
	"github.com/grant/CSE-The-Game/cse-the-game/db"
	"github.com/grant/CSE-The-Game/cse-the-game/routing"
	"github.com/grant/CSE-The-Game/cse-the-game/model"
)

func main() {
	// Setup logger
	log.SetFormatter(&log.TextFormatter{})
	log.SetOutput(os.Stderr)
	log.SetLevel(log.DebugLevel)

	// Setup router
	router := routing.NewRouter()

	// Setup port
	port := os.Getenv("PORT")
	if port == "" {
		log.Fatal("$PORT must be set")
	}

	// Setup postgres
	db.SetupDb(model.GetModels())

	model.CreateUser(model.User{
		Username:"grant2",
		DisplayName:"gctimmer2",
	})
	model.GetAllUsers()

	// Setup server
	log.Println("Running on http://localhost:" + port)
	log.Fatal(http.ListenAndServe(":" + port, router))
}
