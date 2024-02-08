import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var prismaClient: undefined | ReturnType<typeof prismaClientSingleton>;
}

export const prismaClient = globalThis.prismaClient ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production")
  globalThis.prismaClient = prismaClient;
