# CSE — The Game

My Senior year Spring quarter side project. My goal is to incorporate the material I learned in each of my computer science classes in some part of the development of the game.

---

A game about running a computer science and engineering (CSE) department. You are the department chair and your job is to make your CSE department as successful as possible by completing the missions.

# Screenshots

  TODO 2-4 pictures of the game with descriptions

# Gameplay

  TODO description of how you play
 
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
  - Redux
  - inline styles
- Iso.js - graphics
- Webpack - build system

# Build

### Server

Install dependencies

```sh
go get
```

Export your `GOPATH` if necessary.

### Client

### Deploy

Deploy to heroku:

```sh
godep save ./main/...
```

> Made at the University of Washington
