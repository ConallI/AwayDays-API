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
: Updates info of an existing specialty based on input data, returns updated specialty

### deleteSpecialty

**deleteSpecialty(name: String!): Specialty**
: Yep, you guessed it... (also returns the deleted specialty).

## Current Tasks

[] Add more endpoints.
[] Dockerize.
[] rewrite all JS in TS.

This was created during my time as a student at Code Chrysalis.
