import { Modal } from "../../components/modal/modal";
import { AddExpenseForm } from "../../components/forms/add-expense-form";

export default function Page() {
  return (
    <Modal title="add expense">
      <AddExpenseForm />
    </Modal>
  );
}
