import { SubmitButton } from "../../components/submit-button/submit-button";
import { addCategory } from "../../actions/add-category";
import ErrorBoundary from "@/app/components/error-boundary/error-boundary";

export const AddCategoryForm = () => {
  return (
    <ErrorBoundary>
      <div className="w-full">
        <p className="font-semibold text-3xl text-text p-3">Add Category</p>
        <form className="bg-white rounded px-8 pt-6 pb-8 mb-4" action={addCategory}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
              type="text"
              placeholder="Category Name"
              required
            />
          </div>
          <div className="flex items-center justify-end">
            <SubmitButton />
          </div>
        </form>
      </div>
    </ErrorBoundary>
  );
};
