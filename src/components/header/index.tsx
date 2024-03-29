import { HamburguerIcon } from "@/ui/icons/hamburguer-icon";

export function Header() {
  return (
    <header className="flex justify-end px-6 pt-6 pb-3  ">
      <HamburguerIcon className="cursor-pointer" />
    </header>
  );
}
