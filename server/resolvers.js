const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = {
  Query: {
    getCityByTeam: () => {
      name: `This is the API for Away Days`;
    },
  },
};
