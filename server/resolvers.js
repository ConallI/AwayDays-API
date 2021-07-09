module.exports = {
  Query: {
    getTeams: async (_parent, _args, context) => {
      return context.prisma.team.findMany({
        include: {
          hometown: true,
          league: true,
          sport: true,
        },
      });
    },
    getCities: async (_parent, _args, context) => {
      return context.prisma.city.findMany({
        include: {
          specialties: true,
          sights: true,
          region: true,
          teams: {
            include: {
              sport: true,
              league: true,
            },
          },
        },
      });
    },
    getTeamsByCity: async (_parent, { name }, context) => {
      return context.prisma.team.findMany({
        where: {
          hometown: {
            name: name,
          },
        },
        include: {
          hometown: true,
          league: true,
          sport: true,
        },
      });
    },
    getCityByTeam: async (_parent, { name }, context) => {
      return context.prisma.city.findMany({
        where: {
          teams: {
            some: {
              name: {
                contains: name,
              },
            },
          },
        },
        include: {
          specialties: true,
          sights: true,
          region: true,
          teams: {
            include: {
              sport: true,
              league: true,
            },
          },
        },
      });
    },
  },
};
