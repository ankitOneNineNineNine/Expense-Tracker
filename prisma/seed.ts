import { Category, PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient();

const categories: Category[] = [
  {
    id: uuidv4(),
    name: "Food and Drinks",
    createdAt: new Date(),
  },
  {
    id: uuidv4(),
    name: "Transportation",
    createdAt: new Date(),
  },
  {
    id: uuidv4(),
    name: "Vehicle",
    createdAt: new Date(),
  },
  {
    id: uuidv4(),
    name: "Loan",
    createdAt: new Date(),
  },
  {
    id: uuidv4(),
    name: "Housing",
    createdAt: new Date(),
  },
  {
    id: uuidv4(),
    name: "Shopping",
    createdAt: new Date(),
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const data of categories) {
    const category = await prisma.category.create({
      data,
    });
    console.log(`Created categories with name ${category.name}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
