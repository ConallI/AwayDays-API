import {PrismaClient, Prisma} from '@prisma/client';

const prisma = new PrismaClient();

const cityData: Prisma.CityCreateInput[] = [
  {
    name: 'Sendai',
    specialties: {
      create: [
        {
          name: 'Gyutan',
          description: 'Beef tongue, it sounds weird but it is suprisingly good!'
        }
      ]
    },
    sights: {
      create: [
        {
          name: 'Statue of Date Masamune',
          description: 'Statue of the famous founder of the city'
        }
      ]
    },
    teams: {
      create: [
        {
          name: 'Vegalta Sendai',
          league: {
            create: [
              {
                name: 'Meiji Yasuda J1 League'
              }
            ]
          },
          sport: {
            create: {
              name: 'Football'
            }
          }
        }
      ]
    },
    region: {
      create: {
        name: 'Miyagi, Japan'
      }
    }
  },
  {
    name: 'Hiroshima',
    specialties: {
      create: [
        {
          name: 'Okonomiyaki',
          description: 'Savory pancake style dish with many possible ingredients.'
        }
      ]
    },
    sights: {
      create: [
        {
          name: 'Hiroshima Peace Memorial Museum',
          description: 'Dedicated to documenting the atomic bombing of Hiroshima in World War II.'
        }
      ]
    },
    teams: {
      create: [
        {
          name: 'Sanfrecce Hiroshima',
          // league: {
          //   create: [
          //     {
          //       name: 'Meiji Yasuda J1 League'
          //     }
          //   ]
          // }
        }
      ]
    },
    region: {
      create: {
        name: 'Hiroshima, Japan'
      }
    }
  },
  {
    name: 'Tokyo',
    sights: {
      create: [
        {
          name: 'Tokyo SkyTree',
          description: 'The tallest tower in the world'
        },
        {
          name: 'Meiji Shrine',
          description: 'A Shinto shrine in Shibuya, Tokyo, that is dedicated to the deified spirits of Emperor Meiji and his wife, Empress Shōken.'
        }
      ]
    },
    teams: {
      create: [
        {
          name: 'FC Tokyo',
          // league: {
          //   create: [
          //     {
          //       name: 'Meiji Yasuda J1 League'
          //     }
          //   ]
          // }
        }
      ]
    },
    region: {
      create: {
        name: 'Tokyo, Japan'
      }
    }
  },
];

async function seed() {
  console.log(`Start seeding ...`)
  for (const city of cityData) {
    const seedCity = await prisma.city.create({
      data: city,
    })
    console.log(`Created team with id: ${seedCity.id}`)
  }
  console.log(`Seeding finished.`);
};

seed()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

  export default seed;