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
    getTeamByName: async (_parent, { name }, context) => {
      return context.prisma.team.findUnique({
        where: {
          name: name,
        },
        include: {
          sport: true,
          league: true,
          hometown: {
            include: {
              region: true,
              specialties: true,
              sights: true,
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
    getCityByName: async (_parent, { name }, context) => {
      return context.prisma.city.findUnique({
        where: {
          name: name,
        },
        include: {
          region: true,
          specialties: true,
          sights: true,
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
    addRegion: async (_parent, { name }, context) => {
      const created = await context.prisma.region.create({
        data: {
          name: name,
        },
      });
      return created;
    },
    addCity: async (_parent, { name }, context) => {
      const created = await context.prisma.city.create({
        data: {
          name: name,
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
    addSight: async (_parent, args, context) => {
      const created = await context.prisma.sight.create({
        data: {
          name: args.name,
          description: args.description,
        },
      });
      return created;
    },
    addTeam: async (_parent, { name }, context) => {
      const created = await context.prisma.team.create({
        data: {
          name: name,
        },
      });
      return created;
    },
    addSport: async (_parent, { name }, context) => {
      const created = await context.prisma.sport.create({
        data: {
          name: name,
        },
      });
      return created;
    },
    addLeague: async (_parent, { name }, context) => {
      const created = await context.prisma.league.create({
        data: {
          name: name,
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
    updateSight: async (_parent, args, context) => {
      const updated = await context.prisma.sight.update({
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
    deleteSight: async (_parent, { name }, context) => {
      const deleted = await context.prisma.sight.delete({
        where: {
          name: name,
        },
      });
      return deleted;
    },
  },
};
