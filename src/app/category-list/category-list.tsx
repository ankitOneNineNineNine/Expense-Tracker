import { ItemCard } from "../components/item-card/item-card";
import { getCategory } from "../api/get-categories";
import { format } from "date-fns";
import { unstable_noStore as noStore } from "next/cache";

export const CategoryList = async () => {
  noStore();
  const data = await getCategory();
  return (
    <div className="max-h-[198px] overflow-scroll">
      {!data?.length && <span>No Data</span>}
      {data?.map((data, i) => (
        <ItemCard
          key={i}
          title={data.name}
          rightContent={
            <span className="ml-3 text-sm gap-2 text-textLight text-semibold text-opacity-50 mt-3">
              Created at {format(data.createdAt, "dd/mm/yyyy")}
            </span>
          }
        />
      ))}
    </div>
  );
};
