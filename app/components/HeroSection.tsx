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
      {/* Background Grey Pills */}
      <div className="absolute inset-0 pointer-events-none">
        <BackgroundPills pills={leftPills} />
        <BackgroundPills pills={rightPills} />
      </div>

      {/* Floating Cards */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingCardsData.map((card, index) => (
          <FloatingCard key={index} {...card} />
        ))}
      </div>

      {/* Hero Content */}
      <HeroContent />
    </section>
  );
}
