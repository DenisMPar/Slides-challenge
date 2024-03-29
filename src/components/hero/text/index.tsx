import { PrimaryButton } from "@/ui/button";
import { ArrowIcon } from "@/ui/icons/arrow";

export function HeroText() {
  return (
    <div className=" flex flex-col gap-6 align-middle text-center justify-center lg:max-w-sm lg:justify-start xl:max-w-lg ">
      <div className="flex flex-col gap-2 align-middle sm:text-center lg:text-left justify-center">
        <h3 className="text-xs xl:text-sm">A B O U T — P E R S O N A L</h3>
        <h1 className="text-3xl  xl:text-5xl">
          ¡Hello! <b>I’m Angela Smith</b>
        </h1>
      </div>
      <p className="text-base text-center lg:hidden">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt
      </p>
      <p className="hidden lg:inline-block text-base text-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div className="hidden lg:flex lg:flex-col lg:gap-3 lg:w-full lg:justify-center lg:items-start mt-2">
        <PrimaryButton>
          <div className=" flex gap-2 hover:gap-3 transition-all duration-300 ease-in-out items-center justify-center">
            Get started <ArrowIcon />
          </div>
        </PrimaryButton>
      </div>
    </div>
  );
}
