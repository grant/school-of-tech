package db

import (
	"os"
	"database/sql"
	"fmt"
	"time"
	log "github.com/Sirupsen/logrus"
	_ "github.com/lib/pq"
)

func SetupDb() {
	// Open the database
	log.Println("Opening postgres database...")
	db, errd := sql.Open("postgres", os.Getenv("DATABASE_URL"))
	if errd != nil {
		log.Fatalf("Error opening database: %q", errd)
	}

	// Create tables
	if _, err := db.Exec("CREATE TABLE IF NOT EXISTS ticks (tick timestamp)"); err != nil {
		log.Fatalf("Error creating database table: %q\n", err)
		return
	}

	// Insert rows
	if _, err := db.Exec("INSERT INTO ticks VALUES (now())"); err != nil {
		log.Fatalf("Error incrementing tick: %q\n", err)
		return
	}

	// Test select
	rows, err := db.Query("SELECT tick FROM ticks")
	if err != nil {
		log.Fatalf("Error reading ticks: %q\n", err)
		return
	}

	defer rows.Close()
	for rows.Next() {
		var tick time.Time
		if err := rows.Scan(&tick); err != nil {
			log.Fatalf("Error scanning ticks: %q\n", err)
			return
		}
		fmt.Printf("Read from DB: %s\n", tick.String())
	}
}