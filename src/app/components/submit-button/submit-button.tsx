"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton({ title = "Add" }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      className={`bg-background text-pageBackground hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
        pending ? "opacity-50" : ""
      }`}
    >
      {title}
    </button>
  );
}
