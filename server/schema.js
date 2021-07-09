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
    region: Region
    teams: [Team]
  }

  type Region {
    name: String!
  }

  type Team {
    name: String!
    sport: Sport
    hometown: City
    league: [League]
  }

  type League {
    name: String!
  }

  type Sport {
    name: String!
  }

  type Query {
    getTeams: [Team]
    getCities: [City]
    getTeamsByCity(name: String!): [Team]
    getCityByTeam(name: String!): [City]
  }

  input SpecialtyInput {
    name: String
    description: String
  }

  input SightInput {
    name: String
    description: String
  }

  input CityInput {
    name: String!
    specialties: [SpecialtyInput]
    sights: [SightInput]
    population: Int
    region: [String]
    teams: [TeamInput]
  }

  input TeamInput {
    name: String!
    sport: String
    hometown: String
    league: [String]
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
    specialties: [SpecialtyInput]
    sights: [SightInput]
    population: Int
    region: [String]
    teams: [TeamInput]
  }

  input UpdateCity {
    name: String
    specialties: [SpecialtyInput]
    sights: [SightInput]
    population: Int
    region: [String]
    teams: [TeamInput]
  }

  # type Mutation {
  #   addTeam(input: NewTeam!) Team
  #   updateTeam(name: String! input: UpdateTeam!) Team
  #   deleteTeam(name: String!) [Team]
  #   addCity(input: NewCity!) City
  #   updateCity(name: String! input: UpdateCity!) City
  #   deleteCity(name: String!) [City]
  # }
`;

module.exports = typeDefs;
