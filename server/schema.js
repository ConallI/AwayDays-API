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

  input CityOptionalInput {
    specialties: [SpecialtyInput]
    sights: [SightInput]
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

  input UpdateSpecialty {
    name: String
    description: String
  }

  type Mutation {
    #   addTeam(input: NewTeam!) Team
    #   updateTeam(name: String! input: UpdateTeam!) Team
    #   deleteTeam(name: String!) [Team]
    addCity(name: String!, input: CityOptionalInput): City
    #   updateCity(name: String! input: UpdateCity!) City
    #   deleteCity(name: String!) [City]
    addSpecialty(name: String!, description: String): Specialty
    updateSpecialty(name: String!, input: UpdateSpecialty!): Specialty
    deleteSpecialty(name: String!): Specialty
  }
`;

module.exports = typeDefs;
