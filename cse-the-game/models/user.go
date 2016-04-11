package models

import (
	"github.com/jinzhu/gorm"
	"github.com/grant/CSE-The-Game/cse-the-game/db"
)

type User struct {
	gorm.Model
	Email string `json:"email" gorm:"not null;unique_index"`
	Username    string `json:"username" gorm:"not null;unique_index"`
	HashedPassword []byte
	DisplayName string `json:"displayName"`
}

func CreateUser(user User) {
	db.DB.Create(&user)
}

func GetAllUsers() ([]User, error) {
	var users []User;
	db.DB.Find(&users)
	return users, nil
}

func GetUserByUsername(username string) (User, error) {
	var user User;
	db.DB.Where(&User{Username:username}).First(&user)
	return user, nil
}

func GetUserByEmail(email string) (User, error) {
	var user User;
	db.DB.Where(&User{Email:email}).First(&user)
	return user, nil
}