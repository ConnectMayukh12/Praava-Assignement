import FloatingCard from "./FloatingCard";
import BackgroundPills from "./ui/BackgroundPills";
import HeroContent from "./ui/HeroContent";
import { floatingCardsData } from "@/app/config/floatingCards";
import { leftPills, rightPills } from "@/app/config/backgroundPills";
import { heroContent } from "@/app/config/heroContent";
import { COLORS } from "@/app/constants/colors";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen overflow-hidden font-sans"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Background Grey Pills - Hidden on mobile */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <BackgroundPills pills={leftPills} />
        <BackgroundPills pills={rightPills} />
      </div>

      {/* Floating Cards - Absolute positioned for large screens */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {floatingCardsData.map((card, index) => (
          <FloatingCard key={index} {...card} />
        ))}
      </div>

      {/* Hero Content */}
      <HeroContent />

      {/* Floating Cards - Stacked for mobile/tablet */}
      <div className="lg:hidden flex flex-col gap-4 px-6 pb-12">
        {floatingCardsData.map((card, index) => (
          <FloatingCard
            key={index}
            {...card}
            position={{ top: "auto", left: "auto" }}
            rotation={0}
          />
        ))}
      </div>
    </section>
  );
}
