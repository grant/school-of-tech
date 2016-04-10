package model

import (
	"github.com/jinzhu/gorm"
	"github.com/grant/CSE-The-Game/cse-the-game/db"
	log "github.com/Sirupsen/logrus"
)

type User struct {
	gorm.Model
	Username    string `json:"username"`
	DisplayName string `json:"displayName"`
}

func CreateUser(user User) {
	db.DB.Create(&user)
}

func GetAllUsers() []User {
	var users []User;
	db.DB.Find(&users)
	log.Println(users)
	return users
}