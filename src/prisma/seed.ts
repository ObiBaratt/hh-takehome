import { PrismaClient } from "@prisma/client";
import { genColor, rbgColor } from "../lib/helpers";

const prisma = new PrismaClient();

const generateSeedData = () => {
  const seedData: rbgColor[] = [];

  for (let i = 1; i < 123; i++) {
    seedData.push(genColor(i));
  }
  return seedData;
};

async function main() {
  await prisma.color.createMany({
    data: generateSeedData(),
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
