module.exports = {
  Query: {
    getTeams: async (_parent, _args, context) => {
      return context.prisma.team.findMany({
        include: {
          hometown: true,
          league: {
            select: {
              name: true,
            },
          },
          sport: {
            select: {
              name: true,
            },
          },
        },
      });
    },
  },
};
