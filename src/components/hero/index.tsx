"use client";
import { ButtonWithIcon } from "@/ui/button";
import { ArrowIcon } from "@/ui/icons/arrow";
import { useTranslations } from "next-intl";
import Image from "next/image";
import heroImage from "../../../public/hero.png";
import { HeroText } from "./text";
export function HeroSection() {
  const t = useTranslations("Buttons");
  function handleClick() {
    console.log("clicked");
  }
  return (
    <div className="flex flex-col gap-6 place-items-center bg-white h-full flex-1 px-3  lg:flex-row lg:justify-around lg:w-full lg:max-w-screen-2xl lg:mx-auto lg:px-[72px]">
      <HeroText />
      <div className="grow flex  items-center justify-center w-full h-full lg:grow-0 lg:w-fit">
        <Image
          priority
          className="h-[45vh] w-auto animate-fade-down lg:h-full lg:w-full xl:w-full lg:max-w-[673px] lg:max-h-[740px] lg:animate-fade-right animate-duration-1000 xl:justify-self-end"
          src={heroImage}
          sizes="100vw"
          alt="hero-image"
        />
      </div>
      <div className="lg:hidden flex flex-col gap-3 w-full max-w-sm items-center justify-center lg:items-start">
        <ButtonWithIcon
          text={t("getStarted")}
          icon={<ArrowIcon />}
          onClick={handleClick}
        ></ButtonWithIcon>
      </div>
    </div>
  );
}
