"use client";
import { Link } from "@/navigation";
import { EnglandFlag } from "@/ui/icons/england";
import { SpainFlag } from "@/ui/icons/spain";
import { usePathname } from "next/navigation";

export function Language() {
  const pathname = usePathname();

  return (
    <>
      <li className="flex flex-col ">
        <Link href="/" locale="es">
          <SpainFlag />
        </Link>
        {pathname === "/es" && <hr className="border-black" />}
      </li>
      <li className="flex flex-col ">
        <Link href="/" locale="en">
          <EnglandFlag />
        </Link>
        {pathname === "/en" && <hr className="border-black" />}
      </li>
    </>
  );
}
