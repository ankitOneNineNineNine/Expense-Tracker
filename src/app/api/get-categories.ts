import { prismaClient } from "../utils/prisma";

export async function getCategory() {
  return await prismaClient.category.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}
