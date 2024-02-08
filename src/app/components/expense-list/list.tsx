"use client";

import { ExpenseFilterType } from "@/app/api/get-expenses";
import classNames from "classnames";
import { ItemCard } from "../item-card/item-card";
import { format } from "date-fns";
import { TagSVG } from "@/app/assets/icons";
import { Expense } from "@prisma/client";
import { headers } from "next/headers";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { LoadingSkeleton } from "../loading/loading";
import { ErrorComponent } from "../error-boundary/error-boundary";
import useSWR from "swr";

const fetchExpense = async (
  filterBy: ExpenseFilterType,
  date: Date
): Promise<{ data: Expense[] }> => {
  const data = await fetch(
    `/api/expenses?filterBy=${filterBy}&date=${date.toISOString()}`,
    { next: { tags: ["expenses"] } }
  );
  return data.json();
};

export const List = ({
  filterBy,
  date,
  listClassName,
  showSubContent,
}: {
  filterBy: "category" | "today" | "date";
  date: Date;
  listClassName: string;
  showSubContent: boolean;
}) => {
  const params = useSearchParams();

  const [{ payload, loading, error }, setData] = useState<{
    payload: Expense[];
    loading: boolean;
    error: boolean;
  }>({ payload: [], loading: true, error: false });

  const revalidate = params.get("revalidate");

  useEffect(() => {
    (async () => {
      if (revalidate === null || revalidate) {
        try {
          setData((prev) => ({ ...prev, loading: true }));
          const { data } = await fetchExpense(filterBy, date);
          setData((prev) => ({ ...prev, payload: data }));
        } catch (e) {
          setData((prev) => ({ ...prev, error: true, payload: [] }));
        } finally {
          setData((prev) => ({ ...prev, loading: false }));
        }
      }
    })();
  }, [filterBy, date, revalidate]);

  if (loading) return <LoadingSkeleton />;
  return (
    <div
      className={classNames(
        "max-h-[100px] lg:max-h-[150px] flex flex-col gap-3 overflow-scroll",
        listClassName
      )}
    >
      {error && <ErrorComponent />}
      {!payload.length && <span>No Data</span>}
      {payload.map((expense) => (
        <ItemCard
          key={expense.id + expense.createdAt}
          title={expense.title}
          subContent={
            showSubContent ? (
              <div className="flex font-semibold text-sm gap-2 text-textLight text-opacity-50">
                <span>
                  {expense.createdAt && format(expense.createdAt, "hh:mm a")}
                </span>
                <span className="flex items-center gap-1">
                  <TagSVG className="scale-[2]" />
                  {expense.tag}
                </span>
              </div>
            ) : null
          }
          rightContent={
            <p className="text-m font-semibold">
              {Intl.NumberFormat().format(+expense.amount)}
            </p>
          }
        />
      ))}
    </div>
  );
};
