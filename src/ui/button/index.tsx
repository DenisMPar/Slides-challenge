import { lato } from "../fonts";
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
      className={`${lato.className} bg-black hover:bg-gray-800 text-white w-full rounded-xl h-14 lg:max-w-39`}
    >
      {children}
    </button>
  );
}
export function ArrowRoundedButton({ onClick }: { onClick?: () => void }) {
  return (
    <button
      className="w-fit hover:animate-bounce"
      aria-label="arrowButton"
      onClick={onClick}
    >
      <RoundedArrow />
    </button>
  );
}
