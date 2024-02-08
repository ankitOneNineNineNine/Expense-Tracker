import { AddCategoryForm } from "@/app/components/forms/add-category-form";
import { Modal } from "../../components/modal/modal";

export default function Page() {
  return (
    <Modal title="add category">
      <AddCategoryForm />
    </Modal>
  );
}
