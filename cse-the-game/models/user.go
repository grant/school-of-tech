package models

import (
	"github.com/jinzhu/gorm"
	"github.com/grant/CSE-The-Game/cse-the-game/db"
)

type User struct {
	gorm.Model
	Email string `json:"email" gorm:"not null;unique_index"`
	Username    string `json:"username" gorm:"not null;unique_index"`
	DisplayName string `json:"displayName"`
}

func CreateUser(user User) {
	db.DB.Create(&user)
}

func GetAllUsers() []User {
	var users []User;
	db.DB.Find(&users)
	return users
}