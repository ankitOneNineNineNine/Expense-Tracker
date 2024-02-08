"use client";
import { CrossSVG, HamburgerSVG } from "@/app/assets/icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const activeClass = "border-b-2 max-w-fit";

export const Nav = () => {
  const pathname = usePathname();
  const [openNav, setOpenNav] = useState(false);

  const isCurrentPath = (path = "") => pathname === path;
  return (
    <>
      <button
        className="block md:hidden w-[50px] overflow-hidden fixed bg-background rounded-xl top-[0] p-1"
        onClick={() => setOpenNav((prev) => !prev)}
      >
        {!openNav ? <HamburgerSVG /> : <CrossSVG className="scale-[0.8]" />}
      </button>
      <nav
        className={`p-10 flex flex-col font-semibold text-2xl gap-3 md:flex ${
          openNav ? "" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-2 p-2">
          <Image
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            alt="profile image"
            width="100"
            height="100"
            className="rounded-xl"
          />
          <p>Bruno</p>
          <p className="text-sm">bruno@gmail.com</p>
        </div>
        <div className="mt-5 flex flex-col gap-3">
          {[
            { path: "/expense-list", title: "Expenses" },
            { path: "/categories-list", title: "Category" },
          ].map((nav) => (
            <Link
              href={nav.path}
              key={nav.path}
              className={isCurrentPath(nav.path) ? activeClass : ")"}
            >
              {nav.title}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};
