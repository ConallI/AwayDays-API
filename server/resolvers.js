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
    addCity: async (_parent, args, context) => {
      console.log(args.input);
      const created = await context.prisma.city.create({
        data: {
          name: args.name,
          specialties: {
            create: [
              {
                name: args?.input?.specialties[0]?.name,
                description: args?.input?.specialties[0]?.description,
              },
            ],
          },
          sights: {
            create: [
              {
                name: args?.input?.sights[0]?.name,
                description: args?.input?.sights[0]?.description,
              },
            ],
          },
          teams: {
            create: [
              {
                name: args?.input?.teams[0]?.name,
              },
            ],
          },
        },
      });
      return created;
    },
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
