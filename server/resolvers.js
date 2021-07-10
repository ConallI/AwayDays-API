const { isConditionalExpression } = require("typescript");

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
      return context.prisma.city.findUnique({
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
  Mutation: {
    // addCity: async (_parent, { input }, context) => {
    //   console.log(input);
    //   await context.prisma.city.create({
    //     data: {
    //       name: input.name,
    //     },
    //   });
    // await context.prisma.city.create({
    //   data: {
    //     name: input.name,
    //     specialties: {
    //       create: [
    //         {
    //           name: input.specialties.name,
    //           description: input.specialties.description,
    //         },
    //       ],
    //     },
    //     sights: {
    //       create: [
    //         {
    //           name: input.sights.name,
    //           description: input.sights.description,
    //         },
    //       ],
    //     },
    //     population: input.population,
    //     region: {
    //       create: [{ name: input.region.name }],
    //     },
    //     teams: {
    //       create: [
    //         {
    //           name: input.teams.name,
    //           sport: {
    //             create: [{ name: input.teams.sport }],
    //           },
    //           league: {
    //             create: [{ name: input.teams.league }],
    //           },
    //         },
    //       ],
    //     },
    //   },
    // });
    // return context.prisma.city.findUnique({
    //   where: {
    //     name: input.name,
    //   },
    // });
    // },
    addSpecialty: async (_parent, args, context) => {
      const created = await context.prisma.specialty.create({
        data: {
          name: args.name,
          description: args.description,
        },
      });
      return created;
    },
    updateSpecialty: async (_parent, args, context) => {
      const updated = await context.prisma.specialty.update({
        where: {
          name: args.name,
        },
        data: {
          name: args.input?.name,
          description: args.input?.description,
        },
      });
      return updated;
    },
    deleteSpecialty: async (_parent, { name }, context) => {
      const deleted = await context.prisma.specialty.delete({
        where: {
          name: name,
        },
      });
      return deleted;
    },
  },
};
