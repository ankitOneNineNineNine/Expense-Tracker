import { getCategory } from "../../api/get-categories";

/**
 * Select component for Categories
 */
export const CategorySelect = async () => {
  const data = await getCategory();
  return (
    <select
      className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      required
      name="categoryId"
    >
      {data?.map((cat) => (
        <option key={cat.id} value={cat.id}>
          {cat.name}
        </option>
      ))}
    </select>
  );
};
