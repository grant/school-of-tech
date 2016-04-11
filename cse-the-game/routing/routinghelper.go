package routing

import (
	"net/http"
	"encoding/json"
	"github.com/labstack/echo"
)

func toJSON(w http.ResponseWriter, model interface{}) {
	w.Header().Set(echo.ContentType, echo.ApplicationJSONCharsetUTF8)
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(model)
}
