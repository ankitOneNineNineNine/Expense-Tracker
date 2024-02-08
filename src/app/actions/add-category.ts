"use server";

import { redirect } from "next/navigation";
import { prismaClient } from "../utils/prisma";

export async function addCategory(formData: FormData) {
  const rawFormData = {
    name: formData.get("name") as string,
    createdAt: new Date(),
  };
  await prismaClient.category.create({
    data: rawFormData,
  });
  redirect("/category-list");
}
