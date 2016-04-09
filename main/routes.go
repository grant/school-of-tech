package main

import (
	"github.com/gorilla/mux"
	"github.com/parnurzeal/gorequest"
	"net/http"
)

type Route struct {
	Method      string
	Path        string
	HandlerFunc http.HandlerFunc
}

type Routes []Route

func NewRouter() *mux.Router {
	router := mux.NewRouter().StrictSlash(true)
	for _, route := range routes {
		router.Methods(route.Method).Path(route.Path).Handler(route.HandlerFunc)
	}
	return router
}

func createRoute(path string, method string, handler http.HandlerFunc) Route {
	return Route{
		Path:        path,
		Method:      method,
		HandlerFunc: handler,
	}
}

var routes = Routes{
	createRoute("/", gorequest.GET, Index),
	createRoute("/todos", gorequest.GET, TodoIndex),
	createRoute("/todos/{todoId}", gorequest.GET, TodoShow),
}
