import { getExpense } from "../../api/get-expenses";

export const ExpenseSummary = async () => {
  const data = await getExpense("category");
  const total = data.reduce((acc, item) => (acc += Number(item.amount)), 0);
  return (
    <div className="flex flex-col mt-10 px-4">
      <p className="font-semibold text-lg">where your money go?</p>
      <div className="mt-3">
        {data.map((item) => (
          <div className="flex flex-col" key={item.title}>
            <div className="flex justify-between">
              <p className="font-semibold text-sm">{item.title}</p>
              <p className="font-semibold text-xs">{Intl.NumberFormat().format(+item.amount)}</p>
            </div>
            <div className="w-full pt-2 pb-4 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-background h-1.5 rounded-full"
                style={{ width: `${(+item.amount / total) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
