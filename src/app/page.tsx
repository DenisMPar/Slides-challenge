import { ArrowRoundedButton, PrimaryButton } from "@/ui/button";
import { ArrowIcon } from "@/ui/icons/arrow";
import Image from "next/image";
import heroImage from "../../public/hero.png";

export default function Home() {
  return (
    <main className="flex flex-col justify-between items-center gap-4 max-w-md mx-auto h-full flex-1 pb-6 ">
      <div className="grid grid-rows-[auto_1fr_auto] place-items-center bg-white h-full flex-1 px-3  gap-6">
        <div className="flex flex-col gap-6 align-middle text-center justify-center">
          <div className="flex flex-col gap-2 align-middle text-center justify-center">
            <h3 className="text-xs">A B O U T — P E R S O N A L</h3>
            <h1 className="text-3xl">
              ¡Hello! <b>I’m Angela Smith</b>
            </h1>
          </div>
          <p className="text-base text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
        </div>
        <Image
          src={heroImage}
          sizes="100vw"
          alt="hero-image"
          style={{ height: "auto", width: "38vh" }}
        />
        <div className="flex flex-col gap-3 w-full items-center justify-center">
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
