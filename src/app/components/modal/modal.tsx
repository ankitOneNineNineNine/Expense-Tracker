"use client";
import { CrossSVG } from "@/app/assets/icons";
import { useRouter } from "next/navigation";

export const Modal = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const router = useRouter();
  return (
    <div
      className="relative z-10"
      aria-labelledby={title}
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="absolute bg-background top-0 left-0 right-0 bottom-0 opacity-75" />
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-pageBackground text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <button
              className="absolute right-0 hover:bg-background rounded-full w-[50px] h-[50px] group"
              onClick={() => {
                router.back();
              }}
            >
              <CrossSVG className="scale-[0.3] group-hover:fill-pageBackground" />
            </button>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
