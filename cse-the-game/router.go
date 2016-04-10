package main

import (
	"github.com/gorilla/mux"
	"github.com/parnurzeal/gorequest"
)

func NewRouter() *mux.Router {
	router := mux.NewRouter().StrictSlash(true)
	for _, route := range routes {
		handler := Logger(route.HandlerFunc)
		router.Methods(route.Method).Path(route.Path).Handler(handler)
	}
	router.PathPrefix(STATIC_DIR).Methods(gorequest.GET).Handler(Static)
	return router
}