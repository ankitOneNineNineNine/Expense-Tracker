"use client";

import { DatePicker } from "../date-picker/date-picker";
import { Suspense, useState } from "react";
import { List } from "./list";
import { LoadingSkeleton } from "../loading/loading";
import { ExpenseFilterType } from "@/app/api/get-expenses";

/**
 * Expense List
 * Filter by month (whole month), today (today date), category (Group by category and find total expense)
 */
export const ExpenseList = ({
  header = "Top Expenses",
  showSubContent = true,
  filterBy = "month",
  listClassName = "",
}: {
  header?: string;
  showSubContent?: boolean;
  filterBy?: ExpenseFilterType;
  listClassName?: string;
}) => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between mb-3">
        <p className="font-semibold text-l">{header}</p>
        {filterBy === "month" && <DatePicker date={date} getSelected={(date) => setDate(date)} />}
      </div>
      <Suspense fallback={<LoadingSkeleton />}>
        <List filterBy={filterBy} date={date} showSubContent={showSubContent} listClassName={listClassName} />
      </Suspense>
    </div>
  );
};
