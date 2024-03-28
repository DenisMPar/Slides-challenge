import { RoundedArrow } from "../icons/rounded-arrow";

export function PrimaryButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="bg-black text-white w-full rounded-xl h-14"
    >
      {children}
    </button>
  );
}
export function ArrowRoundedButton({ onClick }: { onClick?: () => void }) {
  return (
    <button className="w-fit" onClick={onClick}>
      <RoundedArrow />
    </button>
  );
}
