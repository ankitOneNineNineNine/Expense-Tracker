import { addExpense } from "@/app/actions/add-expense";
import { CategorySelect } from "@/app/components/category-select/category-select";
import { SubmitButton } from "@/app/components/submit-button/submit-button";

export const AddExpenseForm = () => {
  return (
    <div className="w-full">
      <p className="font-semibold text-3xl text-text p-3">Add Expense</p>
      <form
        className="bg-white rounded px-8 pt-6 pb-8 mb-4"
        action={addExpense}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            name="title"
            type="text"
            placeholder="Expense Title"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="category"
          >
            Category Name
          </label>
          <CategorySelect />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="amount"
          >
            Amount
          </label>
          <input
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="amount"
            name="amount"
            type="number"
            placeholder="100"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="tag"
          >
            Tag
          </label>
          <input
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="tag"
            name="tag"
            type="text"
            placeholder="tag"
          />
        </div>
        <div className="flex items-center justify-end">
          <SubmitButton />
        </div>
      </form>
    </div>
  );
};
