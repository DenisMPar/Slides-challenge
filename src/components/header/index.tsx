"use client";
import { HamburguerIcon } from "@/ui/icons/hamburguer-icon";
import { useState } from "react";
import { Language } from "../language";

export function Header() {
  const [open, setOpen] = useState(false);
  function handleClick() {
    setOpen(!open);
  }
  return (
    <header className="flex justify-end px-6 xl:px-11 pb-2 color-black gap-2 lg:gap-6 ">
      <nav
        className={` rounded-b-lg shadow-md flex items-center px-4  ${
          open ? "block" : "hidden"
        } transition duration-500 ease-in-out`}
      >
        <ul
          className={`flex gap-4 lg:gap-8 lg:items-center lg:justify-end lg:ml-auto`}
        >
          <Language />
        </ul>
      </nav>

      <button
        className=" focus-visible:outline-none flex items-center h-12 lg:h-16"
        onClick={handleClick}
      >
        <HamburguerIcon className="cursor-pointer" />
      </button>
    </header>
  );
}
