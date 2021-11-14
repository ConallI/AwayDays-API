import { Prisma } from "@prisma/client";

export const cityData: Prisma.CityCreateInput[] = [
  {
    name: "Sendai",
    specialties: {
      create: [
        {
          name: "Gyutan",
          description:
            "Beef tongue, it sounds weird but it is suprisingly good!",
        },
      ],
    },
    sights: {
      create: [
        {
          name: "Statue of Date Masamune",
          description: "Statue of the famous founder of the city",
        },
      ],
    },
    teams: {
      create: [
        {
          name: "Vegalta Sendai",
        },
      ],
    },
    region: {
      create: {
        name: "Miyagi",
        country: "Japan",
      },
    },
  },
  {
    name: "Hiroshima",
    specialties: {
      create: [
        {
          name: "Okonomiyaki",
          description:
            "Savory pancake style dish with many possible ingredients.",
        },
      ],
    },
    sights: {
      create: [
        {
          name: "Hiroshima Peace Memorial Museum",
          description:
            "Dedicated to documenting the atomic bombing of Hiroshima in World War II.",
        },
      ],
    },
    teams: {
      create: [
        {
          name: "Sanfrecce Hiroshima",
        },
      ],
    },
    region: {
      create: {
        name: "Hiroshima",
        country: "Japan",
      },
    },
  },
  {
    name: "Tokyo",
    sights: {
      create: [
        {
          name: "Tokyo SkyTree",
          description: "The tallest tower in the world",
        },
        {
          name: "Meiji Shrine",
          description:
            "A Shinto shrine in Shibuya, Tokyo, that is dedicated to the deified spirits of Emperor Meiji and his wife, Empress Shōken.",
        },
      ],
    },
    teams: {
      create: [
        {
          name: "FC Tokyo",
        },
      ],
    },
    region: {
      create: {
        name: "Tokyo",
        country: "Japan",
      },
    },
  },
];

export const leagueData: Prisma.LeagueCreateInput[] = [
  {
    name: "Meiji Yasuda J1 League",
  },
];

export const sportData: Prisma.SportCreateInput[] = [
  {
    name: "Soccer",
  },
];
