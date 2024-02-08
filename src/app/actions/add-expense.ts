"use server";

import { redirect } from "next/navigation";
import { prismaClient } from "../utils/prisma";
import { Decimal } from "@prisma/client/runtime/library";
import { revalidatePath, revalidateTag } from "next/cache";

export async function addExpense(formData: FormData) {
  const rawFormData = {
    title: formData.get("title") as string,
    categoryId: formData.get("categoryId") as string,
    amount: new Decimal((formData.get("amount") ?? 0) as number),
    createdAt: new Date(),
    tag: formData.get("tag") as string,
  };

  await prismaClient.expense.create({
    data: rawFormData,
  });

  revalidateTag("expenses");

  redirect("/expense-list?revalidate=true");
}
