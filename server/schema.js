const { gql } = require("apollo-server");

const typeDefs = gql`
  type Specialty {
    name: String!
    description: String
  }

  type Sight {
    name: String!
    description: String
  }

  type City {
    name: String!
    specialties: [Specialty]
    sights: [Sight]
    population: Int
    region: [String]
    teams: [Team]
  }

  type Team {
    name: String!
    sport: String
    hometown: String
    league: [String]
  }

  type Query {
    getTeams: [Team]
    getTeamsByCity: [Team]
    getCities: [City]
    getCityByTeam(name: String!) [City]
    getCitiesBySpecialty(name: String!) [City]
  }

  input NewTeam {
    name: String!
    sport: String
    hometown: String
    league: [String]
  }

  input UpdateTeam {
    name: String
    sport: String
    hometown: String
    league: [String]
  }

  input NewCity {
    name: String!
    specialties: [Specialty]
    sights: [Sight]
    population: Int
    region: [String]
    teams: [Team]
  }

  input UpdateCity {
    name: String
    specialties: [Specialty]
    sights: [Sight]
    population: Int
    region: [String]
    teams: [Team]
  }

  type Mutation {
    addTeam(input: NewTeam!) Team
    updateTeam(name: String! input: UpdateTeam!) Team
    deleteTeam(name: String!) [Team]
    addCity(input: NewCity!) City
    updateCity(name: String! input: UpdateCity!) City
    deleteCity(name: String!) [City]
  }
`;

module.exports = typeDefs;
