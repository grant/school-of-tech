package db

import (
	"fmt"
	"github.com/grant/CSE-The-Game/cse-the-game/schemas"
)

var currentId int
var Todos schemas.Todos

func init() {
	RepoCreateTodo(schemas.Todo{Name: "Write presentation"})
	RepoCreateTodo(schemas.Todo{Name: "Host meetup"})
}

func RepoFindTodo(id int) schemas.Todo {
	for _, t := range Todos {
		if t.Id == id {
			return t
		}
	}
	return schemas.Todo{}
}

func RepoCreateTodo(t schemas.Todo) schemas.Todo {
	currentId += 1
	t.Id = currentId
	Todos = append(Todos, t)
	return t
}

func RepoDestroyTodo(id int) error {
	for i, t := range Todos {
		if t.Id == id {
			Todos = append(Todos[:i], Todos[i + 1:]...)
			return nil
		}
	}
	return fmt.Errorf("Could not find Todo with id of %d to delete", id)
}