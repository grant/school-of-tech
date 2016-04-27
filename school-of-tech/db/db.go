package db

import (
	"os"
	log "github.com/Sirupsen/logrus"
	_ "github.com/lib/pq"
	"github.com/jinzhu/gorm"
	"reflect"
)

var DB *gorm.DB = nil

func SetupDb(models []interface{}) {
	// Open the database
	log.Println("Opening postgres database...")
	var err error
	DB, err = gorm.Open("postgres", os.Getenv("DATABASE_URL"))
	if err != nil {
		log.Fatalf("Error opening database: %q", err)
	}

	// Ping function checks the database connectivity
	err = DB.DB().Ping()
	if err != nil {
		panic(err)
	}

	createTables(models)
}

func createTables(tables []interface{}) {
	for _, table := range tables {
		// Create new tables
		tableName := reflect.Indirect(reflect.ValueOf(table)).Type().Name()
		log.Debugln("Checking table:", tableName)
		if !DB.HasTable(table) {
			log.Infoln("CREATE TABLE:", tableName)
			DB.CreateTable(table)
		}

		// Migrate if needed
		DB.AutoMigrate(table)
	}
}
