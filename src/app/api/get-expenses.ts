import { prismaClient } from "@/app/utils/prisma";
import { endOfDay, endOfMonth, startOfDay, startOfMonth } from "date-fns";

export type ExpenseFilterType = "category" | "today" | "date";

const getFilterPredicate = (type: ExpenseFilterType, date = new Date()) => {
  switch (type) {
    case "today":
      return {
        by: ["id", "amount", "title", "tag", "createdAt"],
        where: {
          createdAt: {
            gte: startOfDay(date),
            lte: endOfDay(date),
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      };
    case "date":
      return {
        by: ["id", "amount", "title", "tag", "createdAt"],
        where: {
          createdAt: {
            gte: startOfMonth(date),
            lte: endOfMonth(date),
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      };
    default:
      return {
        by: ["categoryId"],
        _sum: {
          amount: true,
        },
      };
  }
};

export async function getExpense(type: ExpenseFilterType, date = new Date()) {
  const [expenses, categories] = await Promise.all([
    await prismaClient.expense.groupBy(getFilterPredicate(type, date) as any),
    await prismaClient.category.findMany(),
  ]);

  return expenses.map((exp) => ({
    ...exp,
    ...(type === "category"
      ? {
          title:
            categories.find((cate) => cate.id === exp.categoryId)?.name ?? "-",
          amount: exp._sum?.amount?.valueOf() ?? exp.amount.valueOf(),
        }
      : {}),
  }));
}
