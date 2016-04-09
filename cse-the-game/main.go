package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
)

// TODO use echo instead of gorilla
func main() {
	router := NewRouter()

	port := os.Getenv("PORT")
	if port == "" {
		log.Fatal("$PORT must be set")
	}
	fmt.Println("Running on http://localhost:" + port)
	log.Fatal(http.ListenAndServe(":" + port, router))
}
