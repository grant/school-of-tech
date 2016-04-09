package main

import (
	"fmt"
	"log"
	"net/http"
	"strconv"
)

// TODO use echo instead of gorilla
func main() {
	router := NewRouter()

	port := 8080
	fmt.Println("Running on http://localhost:" + strconv.Itoa(port))
	log.Fatal(http.ListenAndServe(":" + strconv.Itoa(port), router))
}
