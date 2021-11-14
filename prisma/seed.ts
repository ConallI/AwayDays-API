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

  const teams = [
    "Avispa Fukuoka",
    "Shonan Bellmare",
    "Sanfrecce Hiroshima",
    "Kashima Antlers",
    "Kashiwa Reysol",
    "Kawasaki Frontale",
    "Vissel Kobe",
    "Nagoya Grampus",
    "Oita Trinita",
    "Cerezo Osaka",
    "Gamba Osaka",
    "Urawa Reds",
    "Hokkaido Consadole Sapporo",
    "Shimizu S-Pulse",
    "Vegalta Sendai",
    "Tokushima Vortis",
    "FC Tokyo",
    "Sagan Tosu",
    "Yokohama F. Marinos",
    "Yokohama FC",
  ];
  teams.forEach(async (teamName) => {
    const team = await prisma.team.update({
      where: {
        name: teamName,
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
    console.log(`Connected ${team.name} to sport and league tables`);
  });

  const cities = [
    ["Hiratsuka", "Kanagawa"],
    ["Yokohama", "Kanagawa"],
  ];
  cities.forEach(async (cityRegion) => {
    const cityToRegion = await prisma.city.update({
      where: {
        name: cityRegion[0],
      },
      data: {
        region: {
          connect: {
            name: cityRegion[1],
          },
        },
      },
    });
    console.log(`Connected ${cityToRegion.name} to region table`);
  });

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
