const { gql } = require("apollo-server");

const typeDefs = gql`
  type City {
    name: String!
    specialties: [Specialty]
    sights: [Sight]
    population: Int
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
    league: [League]
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
    getTeamsByCity(name: String!): [Team]
    getCityByTeam(name: String!): [City]
  }

  input CityInput {
    name: String!
    specialties: [SpecialtyInput]
    sights: [SightInput]
    population: Int
    region: RegionInput
    teams: [TeamInput]
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
    league: [String]
  }

  input NewCity {
    name: String!
    specialties: [SpecialtyInput]
    sights: [SightInput]
    population: Int
    region: RegionInput
    teams: [TeamInput]
  }

  input BasicCity {
    name: String!
  }

  input UpdateCity {
    name: String
    specialties: [SpecialtyInput]
    sights: [SightInput]
    population: Int
    region: [String]
    teams: [TeamInput]
  }

  input NewTeam {
    name: String!
    sport: String
    hometown: String
    league: [String]
  }

  input UpdateSpecialty {
    name: String
    description: String
  }

  input UpdateTeam {
    name: String
    sport: String
    hometown: String
    league: [String]
  }

  type Mutation {
    #   addTeam(input: NewTeam!) Team
    #   updateTeam(name: String! input: UpdateTeam!) Team
    #   deleteTeam(name: String!) [Team]
    # addCity(input: BasicCity!): City
    #   updateCity(name: String! input: UpdateCity!) City
    #   deleteCity(name: String!) [City]
    addSpecialty(name: String!, description: String): Specialty
    updateSpecialty(name: String!, input: UpdateSpecialty!): Specialty
    deleteSpecialty(name: String!): Specialty
  }
`;

module.exports = typeDefs;
