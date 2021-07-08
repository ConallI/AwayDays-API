const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = {
  Query: {
    info: () => `This is the API for Away Days`,
  },
};
