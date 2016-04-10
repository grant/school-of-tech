package main

import (
	"encoding/json"
	"fmt"
	"github.com/gorilla/mux"
	"net/http"
	"github.com/labstack/echo"
	"io/ioutil"
	"io"
)

func Index(w http.ResponseWriter, r *http.Request) {
	http.FileServer(http.Dir("." + STATIC_DIR + "views/")).ServeHTTP(w, r)
}

func TodoIndex(w http.ResponseWriter, r *http.Request) {
	w.Header().Set(echo.ContentType, echo.ApplicationJSONCharsetUTF8)
	w.WriteHeader(http.StatusOK)
	if err := json.NewEncoder(w).Encode(todos); err != nil {
		panic(err)
	}
}

func TodoShow(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	todoId := vars["todoId"]
	fmt.Fprintln(w, "Todo show:", todoId)
}

func TodoCreate(w http.ResponseWriter, r *http.Request) {
	var todo Todo
	body, err := ioutil.ReadAll(io.LimitReader(r.Body, 1048576))
	if err != nil {
		panic(err)
	}
	if err := r.Body.Close(); err != nil {
		panic(err)
	}
	if err := json.Unmarshal(body, &todo); err != nil {
		w.Header().Set(echo.ContentType, echo.ApplicationJavaScriptCharsetUTF8)
		w.WriteHeader(422) // unprocessable entity
		if err := json.NewEncoder(w).Encode(err); err != nil {
			panic(err)
		}
	}

	t := RepoCreateTodo(todo)
	w.Header().Set(echo.ContentType, echo.ApplicationJSONCharsetUTF8)
	w.WriteHeader(http.StatusCreated)
	if err := json.NewEncoder(w).Encode(t); err != nil {
		panic(err)
	}
}

func Static(w http.ResponseWriter, r *http.Request) {
	http.StripPrefix(STATIC_DIR, http.FileServer(http.Dir("." + STATIC_DIR))).ServeHTTP(w, r)
}