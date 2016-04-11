package auth
import "net/http"

const REDIRECT_URL = "/login"

func AuthenicationHandler(inner http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if IsAuthenticated(r) {
			inner.ServeHTTP(w, r)
		} else {
			http.Redirect(w, r, REDIRECT_URL, http.StatusFound)
		}
	})
}
