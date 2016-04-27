# School of Tech

My Senior year Spring quarter side project. My goal is to incorporate the material I learned in each of my computer science classes in some part of the development of the game.

---

A game about running a computer science and engineering (CSE) department. You are the department chair and your job is to make your CSE department as successful as possible by completing the missions.

# Screenshots

  TODO 2-4 pictures of the game with descriptions

# Gameplay

  TODO description of how you play

# Computer Science classes I've taken (excluding the beloved Accelerated [Honors] Advanced Calculus series):
- [ ] **CSE143X** - Computer Programming II: ???
- [ ] **CSE311** - Foundations of Computing I: ???
- [ ] **CSE312** - Foundations of Computing II: ???
- [ ] **CSE331** - Software Design & Implementation: ???
- [ ] **CSE332** - Data Abstractions: ???
- [ ] **CSE341** - Programming Languages: Javascript, Go
- [ ] **CSE351** - HW/SW Interface: ???
- [ ] **CSE390** - Leadership Seminar: ???
- [ ] **CSE401** - Compiler Construction: Creating an DSL for Isometric 3D graphics
- [ ] **CSE421** - Algorithms: ??
- [ ] **CSE444** - Database Internals: Postgres setup
- [ ] **CSE446** - Machine Learning: ???
- [ ] **CSE451** - Operating Systems: ???
- [ ] **CSE452** - Distributed Systems: Learning Go
- [ ] **CSE454** - Advanced Internet and Web Services: ???
- [ ] **CSE461** - Computer Networks: ???
- [ ] **CSE473** - Artificial Intelligence: ???
- [ ] **CSE481** - Sound Capstone: ???
- [ ] **CSE484** - Computer Security: bcrypt
- [ ] **CSE495** - Facebook Open Academy: socket.io

# Ideas

- Budget
    - Free food for students
    - Coffee shop
    - Teacher salary
    - Student tuition
    - Buy TA/Professor
- Curriculum
    - Designing classes
    - Make specialty classes, makes students really good at particular area, make college a specialty in ML (i.e.)
- Student Happiness
    - Classes too big
    - Can't find classes interesting
    - Money
    - Hunger
    - Textbooks
- Teacher happiness level (unhappy at Stanford)
    - Aligns with interest
    - Office hours
    - Average distance from coffee machine
- Random
    - Ziplines
    - Drones
    - Host hackathons
- Message board
    - Updates about your department
- Mission/Secenerio
    - Measure internships/fulltime
    - Teaching wrong thing
    - Goals
        - Become top ranked
        - Every year you get a report card (money graph, rank, happiness)
- Missions
    1. Grow department from 0 to 50 students
    1. Design a curriculum. Add 5 new courses and 2 new professors
    1. Research: Getting grant money/Convince new professors to come to your school
    1. Food oriented, working long hours, all restaurants far away, people unhappy, so place coffee machines and food, keep healthy,nap pods, see grad students sleeping on couches, create social events, happy hours
    1. Career Fair, not exciting tech companies come, but then popular ones come
    1. Build another building (middle ranked college, lots want to apply, want to build another building, how do you fundraise, hire teachers)
    1. 2 buildings exist, but how to keep connected
    1. Become #1 CSE department
- Research
    - Find new tools
    - Get $$ grants
    - Popularity
    - Undergrads learn things (not productive)
- Building the deparment infrastructure
    - Atrium
    - Bathrooms (Shower)
    - Coffeebar
    - Grad Labs (too many grads in one room = unhappy)
    - Professor Office
    - Microkitchen/SnackOverflow
- People
    - Professors walk slower

# Technology
- Go - server
  - Good for many concurrent clients
- React - frontend UI
  - Redux - State Manager
  - Router - Routing
  - Flux - Architecture
- Postgres - database
  - gorm - ORM
- Iso.js - graphics
- Webpack - build system

# Build

First create an `.env` file for environment variables

```sh
DATABASE_URL=postgres://username:password@host:port/path
PORT=5000
```

Use `package.json`'s scripts for all our commands, even for Go code.
Run `npm run` to see all available commands.

### Server

Run:

```sh
go get ./cse-the-game && heroku local
# or
PORT=5000 go run ./cse-the-game/*.go
# or
npm run server
```

### Client

### Deploy

First time setup:

```sh
heroku addons:create heroku-postgresql:hobby-dev
heroku buildpacks:add heroku/go heroku/nodejs
```

> (You may want to change the order of the buildpacks.)

Deploy to heroku:

```sh
npm run deploy
```

Made at the University of Washington
