import { Modal } from "@/app/components/modal/modal";
import { AddExpenseForm } from "./add-expense-form";

export default function Page() {
  return (
    <Modal title="add expense">
      <AddExpenseForm />
    </Modal>
  );
}