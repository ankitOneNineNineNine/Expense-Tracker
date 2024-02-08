import { prismaClient } from "@/app/utils/prisma";

export async function getCategory() {
  return await prismaClient.category.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}
