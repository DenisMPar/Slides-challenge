import { ButtonWithIcon } from "@/ui/button";
import { ArrowIcon } from "@/ui/icons/arrow";
import { useTranslations } from "next-intl";

export function HeroText() {
  const t = useTranslations();
  function handleClick() {
    console.log("clicked");
  }
  return (
    <div className=" flex flex-col gap-6 align-middle text-center justify-center lg:max-w-sm lg:justify-start xl:max-w-lg ">
      <div className="flex flex-col gap-2 align-middle sm:text-center lg:text-left justify-center">
        <h3 className="text-xs xl:text-sm">{t("HeroSection.description")}</h3>
        <h1 className="text-3xl  xl:text-5xl">
          {t.rich("HeroSection.title", {
            bold: (chunks) => <b>{chunks}</b>,
          })}
        </h1>
      </div>
      <p className="text-base text-center lg:hidden">
        {t("HeroSection.subtitleMobile")}
      </p>
      <p className="hidden lg:inline-block text-base text-left">
        {t("HeroSection.subtitleDesktop")}
      </p>
      <div className="hidden lg:flex lg:flex-col lg:gap-3 lg:w-full lg:justify-center lg:items-start mt-2">
        <ButtonWithIcon
          text={t("Buttons.getStarted")}
          icon={<ArrowIcon />}
          onClick={handleClick}
        ></ButtonWithIcon>
      </div>
    </div>
  );
}
