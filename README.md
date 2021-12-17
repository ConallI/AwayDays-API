# AwayDays API

AwayDays is an API that can help you plan your next trip when following your favourite sports team away from home.

It is built using GraphQL, Apollo, Prisma and Postgres.

:basketball: :soccer: :rugby_football:

#### For GraphQL Objects, Input types etc - see server/schema.js

:tennis: :football: :baseball:

## Queries

### getCities

**getCities: [City]**
: Returns all of the current cities in the database.

### getCityByName

**getCityByName(name: String!): City**
: returns the chosen city.

### getTeams

**getTeams: [Team]**
: Returns all of the current teams in the database.

### getTeamsByName

**getTeamByName(name: String!): Team**
: returns the chosen team.

### getTeamsByCity

**getTeamsByCity(name: String!): [Team]**
: returns all of the teams from a particular city.

---

## Mutations

### addRegion

**addRegion(name: String!): Region**
: Creates a new region with given name. Returns the new region.

### addCity

**addCity(name: String!): City**
: Creates a new city with the given name. Returns the new city.

### addSight

**addSight(name: String!, description: String): Specialty**
: Creates a new sight with the given name and optional description. Returns the new city.

### addSpecialty

**addSpecialty(name: String!, description: String): Specialty**
: Creates a new specialty with the given name and optional description. Returns the new city.

### addTeam

**addTeam(name: String!): Team**
: Creates a new team with the given name. Returns the new team.

### addSport

**addSport(name: String!): Sport**
: Creates a new sport with the given name. Returns the new sport.

### addLeague

**addLeague(name: String!): League**
: Creates a new league with the given name. Returns the new league.

---

### updateSpecialty

**updateSpecialty(name: String!, input: UpdateSpecialty!): Specialty**
: Updates info of an existing specialty based on input data, returns updated specialty.

### updateSight

**updateSight(name: String!, input: UpdateSight!): Sight**
: Updates info of an existing sight based on input data, returns updated sight.


### deleteSpecialty

**deleteSpecialty(name: String!): Specialty**
: Deletes specialty from the db based on given name, returns deleted specialty.

### deleteSight

**deleteSight(name: String!): Sight**
: Yep, you guessed it... (also returns the deleted sight).

## Get Started

- Clone this repository.
- Run `sh start.sh` in the terminal to get started. This will run the following commands...
  - `docker-compose build` to build the server and db containers.
  - `docker-compose up -d` to run both containers in detached mode.
  - `docker exec -ti <app-container-name-here> npm run migrate` to initialize the db with the current migrations.
  - `docker exec -ti <app-container-name-here> npm run seed` to seed the db with initial data.
- When you are finished, use `docker-compose down` to stop and remove the containers.

## Current Tasks

- [ ] Add more endpoints.

This was started during my time as a student at Code Chrysalis.
