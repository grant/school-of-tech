package ws

import "github.com/googollee/go-socket.io"

const URL = "/socket.io/"

type SocketHandler func(socketio.Socket, interface{})

const (
	Connection string = "connection"
	Disconnect string = "disconnect"
	Reconnect string = "reconnect"
	ReconnectAttempt string = "reconnect_attempt"
	Reconnecting string = "reconnecting"
	ReconnectError string = "reconnect_error"
	ReconnectFailed string = "reconnect_failed"
	Error string = "error"
)

func IsSocketIOEvent(event string) bool {
	events := []string{
		Connection,
		Disconnect,
		Reconnect,
		ReconnectAttempt,
		Reconnecting,
		ReconnectError,
		ReconnectFailed,
		Error,
	}
	for _, eventName := range events {
		if event == eventName {
			return true
		}
	}
	return false
}