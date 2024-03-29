import { ArrowRoundedButton, PrimaryButton } from "@/ui/button";
import { ArrowIcon } from "@/ui/icons/arrow";
import Image from "next/image";
import heroImage from "../../public/hero.png";

export default function Home() {
  return (
    <main className="flex flex-col sm:justify-between items-center gap-4 lg:gap-0 sm:max-w-md sm:mx-auto lg:max-w-none lg:mx-0 h-full flex-1 pb-6 ">
      <div className="flex flex-col gap-6 place-items-center bg-white h-full flex-1 px-3  lg:flex-row lg:justify-around lg:w-full lg:max-w-screen-2xl lg:mx-auto lg:px-[72px] xl:grid-cols-[auto_1fr]">
        <div className=" flex flex-col gap-6 align-middle text-center justify-center lg:max-w-sm lg:justify-start xl:max-w-lg ">
          <div className="flex flex-col gap-2 align-middle sm:text-center lg:text-left justify-center">
            <h3 className="text-xs xl:text-sm">A B O U T — P E R S O N A L</h3>
            <h1 className="text-3xl  xl:text-5xl">
              ¡Hello! <b>I’m Angela Smith</b>
            </h1>
          </div>
          <p className="text-base text-center lg:hidden">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
          <p className="hidden lg:inline-block text-base text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="hidden lg:flex lg:flex-col lg:gap-3 lg:w-full lg:justify-center lg:items-start mt-2">
            <PrimaryButton>
              <div className="flex gap-2 items-center justify-center">
                Get started <ArrowIcon />
              </div>
            </PrimaryButton>
          </div>
        </div>
        <div className="grow flex  items-center justify-center w-full h-full lg:grow-0 lg:w-fit">
          <Image
            className="h-[45vh] w-auto xl:justify-self-end lg:h-full lg:w-full xl:w-full lg:max-w-[673px] lg:max-h-[740px]"
            src={heroImage}
            sizes="100vw"
            alt="hero-image"
          />
        </div>
        <div className="lg:hidden flex flex-col gap-3 w-full max-w-[369px] items-center justify-center lg:items-start">
          <PrimaryButton>
            <div className="flex gap-2 items-center justify-center">
              Get started <ArrowIcon />
            </div>
          </PrimaryButton>
        </div>
      </div>
      <ArrowRoundedButton />
    </main>
  );
}
