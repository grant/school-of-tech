package routing

import (
	"github.com/parnurzeal/gorequest"
	"net/http"
	"github.com/grant/CSE-The-Game/cse-the-game/ws"
)

type RouteType int

const (
	File = iota
	Directory
	Ws
)

type Route struct {
	Type        RouteType
	Method      string
	Path        string
	PathPrefix  string
	Handler     ws.SocketHandler
	HandlerFunc http.HandlerFunc
}

type Routes []Route

const STATIC_DIR = "/static/"

func createRoute(path string, method string, handler http.HandlerFunc) Route {
	return Route{
		Type: File,
		Path: path,
		Method: method,
		HandlerFunc: handler,
	}
}

func createDirectoryRoute(pathPrefix string, method string, handler http.HandlerFunc) Route {
	return Route{
		Type: Directory,
		PathPrefix: pathPrefix,
		Method: method,
		HandlerFunc: handler,
	}
}

func createWebsocketRoute(path string, handler ws.SocketHandler) Route {
	return Route{
		Type: Ws,
		Path: path,
		Handler: handler,
	}
}

var handler = RouteHandler{}
var routes = Routes{
	createRoute("/", gorequest.GET, handler.Index),
	createRoute("/db", gorequest.GET, handler.Db),
	createWebsocketRoute(ws.Connection, handler.WebsocketConnect),
	createDirectoryRoute(STATIC_DIR, gorequest.GET, handler.Static),
}
