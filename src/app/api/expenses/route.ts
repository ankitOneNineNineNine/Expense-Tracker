import { NextRequest } from "next/server";
import { ExpenseFilterType, getExpense } from "../get-expenses";

export async function GET(request: NextRequest) {
  const searchParams = new URL(request.url).searchParams;
  const filterBy = searchParams.get("filterBy");
  const date = new Date(searchParams.get("date") ?? Date.now());
  const data = await getExpense(filterBy as ExpenseFilterType, date);

  return Response.json({ data });
}
