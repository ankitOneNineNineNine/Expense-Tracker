import { Modal } from "../../components/modal/modal";
import { AddCategoryForm } from "./add-category-form";

export default function Page() {
  return (
    <Modal title="add category">
      <AddCategoryForm />
    </Modal>
  );
}
