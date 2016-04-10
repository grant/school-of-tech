package routing

import (
	"github.com/gorilla/mux"
)

func NewRouter() *mux.Router {
	router := mux.NewRouter().StrictSlash(true)
	for _, route := range routes {
		handler := HTTPLogger(route.HandlerFunc)
		if route.PathPrefix != "" {
			router.Methods(route.Method).PathPrefix(route.PathPrefix).Handler(handler)
		} else if route.Path != "" {
			router.Methods(route.Method).Path(route.Path).Handler(handler)
		}
	}
	return router
}