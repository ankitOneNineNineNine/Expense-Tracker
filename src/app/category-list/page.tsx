import { ExpenseList } from "../components/expense-list/expense-list";
import { PlusSVG } from "../assets/icons";
import { ItemCard } from "../components/item-card/item-card";
import { CategoryList } from "./category-list";
import Link from "next/link";
import { Suspense } from "react";
import { LoadingSkeleton } from "../components/loading/loading";
import ErrorBoundary from "../components/error-boundary/error-boundary";

export default function Page() {
  return (
    <div>
      <div className="flex items-center justify-between flex-wrap">
        <p className="max-w-[102px] font-semibold text-3xl text-text min-w-[150px]">Categories</p>
        <Link href="/category" className="flex text-background items-center gap-2 font-semibold text-l">
          Add Categories
          <PlusSVG className="scale-[2]" />
        </Link>
      </div>

      <div className="mt-14">
        <div className="flex flex-col gap-3">
          <div>
            <div className="flex justify-between mb-3">
              <p className="font-semibold text-l">Your Categories</p>
            </div>
            <ErrorBoundary>
              <Suspense fallback={<LoadingSkeleton />}>
                <CategoryList />
              </Suspense>
            </ErrorBoundary>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="bg-[#F7F7F7] h-[2px] w-full mb-3" />
        <ExpenseList
          header="Top Expenses by Category"
          filterBy="category"
          listClassName="max-h-[100px] lg:max-h-[150px]"
          showSubContent={false}
        />
      </div>
    </div>
  );
}
