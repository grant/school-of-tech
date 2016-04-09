package main

import (
	"github.com/parnurzeal/gorequest"
	"net/http"
)

type Route struct {
	Method      string
	Path        string
	HandlerFunc http.HandlerFunc
}

type Routes []Route

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
	createRoute("/todos", gorequest.POST, TodoCreate),
}
