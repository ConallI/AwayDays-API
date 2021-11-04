import { PrismaClient, Prisma } from "@prisma/client";
import { cityData, leagueData, sportData } from "./seedData";

const prisma = new PrismaClient();

async function seed() {
  console.log(`Deleting previous data ...`);
  await prisma.region.deleteMany();
  await prisma.city.deleteMany();
  await prisma.specialty.deleteMany();
  await prisma.sight.deleteMany();
  await prisma.sport.deleteMany();
  await prisma.team.deleteMany();
  await prisma.league.deleteMany();

  console.log(`Start seeding ...`);

  for (const city of cityData) {
    const seedCity = await prisma.city.create({
      data: city,
    });
    console.log(`Created city with id: ${seedCity.id}`);
  }

  for (const league of leagueData) {
    const seedLeague = await prisma.league.create({
      data: league,
    });
    console.log(`Created league with id: ${seedLeague.id}`);
  }

  for (const sport of sportData) {
    const seedSport = await prisma.sport.create({
      data: sport,
    });
    console.log(`Created sport with id: ${seedSport.id}`);
  }

  const vegalta = await prisma.team.update({
    where: {
      name: "Vegalta Sendai",
    },
    data: {
      sport: {
        connect: {
          name: "Soccer",
        },
      },
      league: {
        connect: {
          name: "Meiji Yasuda J1 League",
        },
      },
    },
  });
  console.log(`Connected ${vegalta.name} to sport and league tables`);

  const sanfrecce = await prisma.team.update({
    where: {
      name: "Sanfrecce Hiroshima",
    },
    data: {
      sport: {
        connect: {
          name: "Soccer",
        },
      },
      league: {
        connect: {
          name: "Meiji Yasuda J1 League",
        },
      },
    },
  });
  console.log(`Connected ${sanfrecce.name} to sport and league tables`);

  const fcTokyo = await prisma.team.update({
    where: {
      name: "FC Tokyo",
    },
    data: {
      sport: {
        connect: {
          name: "Soccer",
        },
      },
      league: {
        connect: {
          name: "Meiji Yasuda J1 League",
        },
      },
    },
  });
  console.log(`Connected ${fcTokyo.name} to sport and league tables`);

  console.log(`Seeding finished.`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

export default seed;
