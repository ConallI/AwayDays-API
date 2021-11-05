const { gql } = require("apollo-server");

const typeDefs = gql`
  type City {
    name: String!
    specialties: [Specialty]
    sights: [Sight]
    region: Region
    teams: [Team]
  }

  type Specialty {
    name: String!
    description: String
  }

  type Sight {
    name: String!
    description: String
  }

  type Region {
    name: String!
  }

  type Team {
    name: String!
    sport: Sport
    hometown: City
    league: League
  }

  type Sport {
    name: String!
  }

  type League {
    name: String!
  }

  type Query {
    getTeams: [Team]
    getCities: [City]
    getTeamByName(name: String!): Team
    getTeamsByCity(name: String!): [Team]
    getCityByName(name: String!): City
    getCitiesByRegion(name: String!): [City]
  }

  input SpecialtyInput {
    name: String
    description: String
  }

  input SightInput {
    name: String
    description: String
  }

  input RegionInput {
    name: String
  }

  input TeamInput {
    name: String!
    sport: String
    hometown: String
    league: String
  }

  input UpdateSpecialty {
    name: String
    description: String
  }

  input NewTeam {
    name: String!
  }

  type Mutation {
    addRegion(name: String!): Region
    addCity(name: String!): City
    addSight(name: String!, description: String): Specialty
    addSpecialty(name: String!, description: String): Specialty
    addTeam(name: String!): Team
    addSport(name: String!): Sport
    addLeague(name: String!): League
    updateSpecialty(name: String!, input: UpdateSpecialty!): Specialty
    deleteSpecialty(name: String!): Specialty
  }
`;

module.exports = typeDefs;
