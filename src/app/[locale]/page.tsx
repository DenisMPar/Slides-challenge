import { HeroSection } from "@/components/hero";
import { ArrowRoundedButton } from "@/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col sm:justify-between items-center gap-4 lg:gap-0 max-w-md mx-auto lg:max-w-none lg:mx-0 h-full flex-1 pb-6 ">
      <HeroSection />
      <ArrowRoundedButton />
    </main>
  );
}
