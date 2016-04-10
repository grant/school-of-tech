package main

import (
	"net/http"
	"os"
	log "github.com/Sirupsen/logrus"
)

func main() {
	// Setup logger
	log.SetFormatter(&log.TextFormatter{})
	log.SetOutput(os.Stderr)
	log.SetLevel(log.DebugLevel)

	// Setup router
	router := NewRouter()

	// Setup port
	port := os.Getenv("PORT")
	if port == "" {
		log.Fatal("$PORT must be set")
	}

	// Setup postgres
	setupDb()

	// Setup server
	log.Println("Running on http://localhost:" + port)
	log.Fatal(http.ListenAndServe(":" + port, router))
}
