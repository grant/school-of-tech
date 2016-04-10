package main

import (
	"github.com/parnurzeal/gorequest"
	"net/http"
)

type Route struct {
	Method      string
	Path        string
	PathPrefix  string
	HandlerFunc http.HandlerFunc
}

type Routes []Route

const STATIC_DIR = "/static/"

func createRoute(path string, method string, handler http.HandlerFunc) Route {
	return Route{
		Path:        path,
		Method:      method,
		HandlerFunc: handler,
	}
}

func createDirectoryRoute(pathPrefix string, method string, handler http.HandlerFunc) Route {
	return Route{
		PathPrefix: pathPrefix,
		Method:method,
		HandlerFunc:handler,
	}
}

var routes = Routes{
	createRoute("/", gorequest.GET, Index),
	createRoute("/db", gorequest.GET, Db),
	createRoute("/todos", gorequest.GET, TodoIndex),
	createRoute("/todos/{todoId}", gorequest.GET, TodoShow),
	createRoute("/todos", gorequest.POST, TodoCreate),
	createDirectoryRoute(STATIC_DIR, gorequest.GET, Static),
}
