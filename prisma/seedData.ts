import { Prisma } from "@prisma/client";

export const cityData: Prisma.CityCreateInput[] = [
  {
    name: "Fukuoka",
    teams: {
      create: [
        {
          name: "Avispa Fukuoka",
        },
      ],
    },
    region: {
      create: {
        name: "Fukuoka",
        country: "Japan",
      },
    },
  },
  {
    name: "Hiratsuka",
    teams: {
      create: [
        {
          name: "Shonan Bellmare",
        },
      ],
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
    name: "Kashima",
    teams: {
      create: [
        {
          name: "Kashima Antlers",
        },
      ],
    },
    region: {
      create: {
        name: "Ibaraki",
        country: "Japan",
      },
    },
  },
  {
    name: "Kashiwa",
    teams: {
      create: [
        {
          name: "Kashiwa Reysol",
        },
      ],
    },
    region: {
      create: {
        name: "Chiba",
        country: "Japan",
      },
    },
  },
  {
    name: "Kawasaki",
    teams: {
      create: [
        {
          name: "Kawasaki Frontale",
        },
      ],
    },
    region: {
      create: {
        name: "Kanagawa",
        country: "Japan",
      },
    },
  },
  {
    name: "Kobe",
    teams: {
      create: [
        {
          name: "Vissel Kobe",
        },
      ],
    },
    region: {
      create: {
        name: "Hyogo",
        country: "Japan",
      },
    },
  },
  {
    name: "Nagoya",
    teams: {
      create: [
        {
          name: "Nagoya Grampus",
        },
      ],
    },
    region: {
      create: {
        name: "Aichi",
        country: "Japan",
      },
    },
  },
  {
    name: "Oita",
    teams: {
      create: [
        {
          name: "Oita Trinita",
        },
      ],
    },
    region: {
      create: {
        name: "Oita",
        country: "Japan",
      },
    },
  },
  {
    name: "Osaka",
    teams: {
      create: [
        {
          name: "Cerezo Osaka",
        },
        {
          name: "Gamba Osaka",
        },
      ],
    },
    region: {
      create: {
        name: "Osaka",
        country: "Japan",
      },
    },
  },
  {
    name: "Saitama",
    teams: {
      create: [
        {
          name: "Urawa Reds",
        },
      ],
    },
    region: {
      create: {
        name: "Saitama",
        country: "Japan",
      },
    },
  },
  {
    name: "Sapporo",
    teams: {
      create: [
        {
          name: "Hokkaido Consadole Sapporo",
        },
      ],
    },
    region: {
      create: {
        name: "Hokkaido",
        country: "Japan",
      },
    },
  },
  {
    name: "Shizuoka",
    teams: {
      create: [
        {
          name: "Shimizu S-Pulse",
        },
      ],
    },
    region: {
      create: {
        name: "Shizuoka",
        country: "Japan",
      },
    },
  },
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
    name: "Tokushima",
    teams: {
      create: [
        {
          name: "Tokushima Vortis",
        },
      ],
    },
    region: {
      create: {
        name: "Tokushima",
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
  {
    name: "Tosu",
    teams: {
      create: [
        {
          name: "Sagan Tosu",
        },
      ],
    },
    region: {
      create: {
        name: "Saga",
        country: "Japan",
      },
    },
  },
  {
    name: "Yokohama",
    teams: {
      create: [
        {
          name: "Yokohama F. Marinos",
        },
        {
          name: "Yokohama FC",
        },
      ],
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
