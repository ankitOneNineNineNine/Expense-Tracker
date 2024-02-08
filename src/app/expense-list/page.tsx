import { ExpenseList } from "../components/expense-list/expense-list";
import { PlusSVG } from "../assets/icons";
import Link from "next/link";
import { Suspense } from "react";
import { LoadingSkeleton } from "../components/loading/loading";
import ErrorBoundary from "../components/error-boundary/error-boundary";

export default function Expenses() {
  return (
    <div>
      <div className="flex items-center justify-between flex-wrap">
        <p className="max-w-[102px] font-semibold text-3xl text-text min-w-[150px]">Expenses</p>
        <Link href="/expense" className="flex text-background items-center gap-2 font-semibold text-l">
          Add Expense
          <PlusSVG className="scale-[2]" />
        </Link>
      </div>

      <div className="mt-10">
        <ErrorBoundary>
          <Suspense fallback={<LoadingSkeleton />}>
            <ExpenseList listClassName="max-h-[210px]" />
          </Suspense>
        </ErrorBoundary>
      </div>

      <div className="mt-10">
        <div className="bg-[#F7F7F7] h-[2px] w-full mb-3" />
        <ExpenseList header="Today’s Expenses" filterBy="today" listClassName="max-h-[100px] lg:max-h-[150px]" />
      </div>
    </div>
  );
}
