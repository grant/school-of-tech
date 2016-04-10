package routing

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

var handler = RouteHandler{}
var routes = Routes{
	createRoute("/", gorequest.GET, handler.Index),
	createRoute("/db", gorequest.GET, handler.Db),
	//createRoute("/todos", gorequest.GET, handler.TodoIndex),
	//createRoute("/todos/{todoId}", gorequest.GET, handler.TodoShow),
	//createRoute("/todos", gorequest.POST, handler.TodoCreate),
	createDirectoryRoute(STATIC_DIR, gorequest.GET, handler.Static),
}
