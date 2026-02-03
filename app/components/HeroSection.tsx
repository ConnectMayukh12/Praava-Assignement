import FloatingCard from "./FloatingCard";
import { Receipt, Home, CheckSquare, FileText } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#F4F6FC] overflow-hidden font-sans">
      {/* Background Grey Pills */}
      <div className="absolute inset-0 pointer-events-none">
        {/* --- LEFT SIDE --- */}

        {/* 1. Top Left - Angled Upwards */}
        <div
          className="absolute top-32 -left-12 w-48 h-24 rounded-full bg-[#E9ECF5]"
          style={{ transform: "rotate(-30deg)" }}
        />

        {/* 2. Middle Left - Horizontal */}
        <div
          className="absolute top-[42%] -left-20 w-64 h-24 rounded-full bg-[#E9ECF5]"
          style={{ transform: "rotate(0deg)" }}
        />

        {/* 3. Bottom Left - Horizontal */}
        <div
          className="absolute top-[52%] -left-12 w-80 h-24 rounded-full bg-[#E9ECF5]"
          style={{ transform: "rotate(0deg)" }}
        />

        {/* --- RIGHT SIDE --- */}

        {/* 1. Top Right - Horizontal */}
        <div
          className="absolute top-20 -right-40 w-[550px] h-32 rounded-full bg-[#E9ECF5]"
          style={{ transform: "rotate(0deg)" }}
        />

        {/* 2. Middle Right - Horizontal */}
        <div
          className="absolute top-[32%] -right-48 w-[600px] h-32 rounded-full bg-[#E9ECF5]"
          style={{ transform: "rotate(0deg)" }}
        />

        {/* 3. Bottom Right - Tilted */}
        <div
          className="absolute top-[44%] -right-20 w-[500px] h-32 rounded-full bg-[#E9ECF5]"
          style={{ transform: "rotate(-12deg)" }}
        />
      </div>

      {/* Floating Cards */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Billing Card - Top Right */}
        <FloatingCard
          icon={Receipt}
          title="Billing"
          bgColor="#2D3FE8"
          textColor="#FFFFFF"
          position={{ top: "22%", right: "6%" }}
          rotation={-8}
          width="380px"
          height="90px"
        />

        {/* Matters Card - Left Middle */}
        <FloatingCard
          icon={Home}
          title="Matters"
          bgColor="#E8773D"
          textColor="#FFFFFF"
          position={{ top: "38%", left: "16%" }}
          rotation={-12}
          width="340px"
          height="90px"
        />

        {/* John Doe Portal Card - Center with Image */}
        <FloatingCard
          title="John Doe - Portal"
          subtitle="Hey! Could you please review a"
          message="document for me?"
          bgColor="#A7B5F4"
          textColor="#3D4B7E"
          position={{ top: "42%", right: "16%" }}
          rotation={-6}
          width="400px"
          height="95px"
          image="placeholder"
        />

        {/* Tasks Card - Bottom Center-Left */}
        <FloatingCard
          icon={CheckSquare}
          title="Tasks"
          bgColor="#3D3B52"
          textColor="#F4A261"
          position={{ bottom: "18%", left: "28%" }}
          rotation={0}
          width="320px"
          height="90px"
        />

        {/* Documents Card - Bottom Right */}
        <FloatingCard
          icon={FileText}
          title="Documents"
          bgColor="#3D3B52"
          textColor="#F4A261"
          position={{ bottom: "12%", right: "8%" }}
          rotation={-5}
          width="460px"
          height="90px"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-[200px] pt-11 ">
        <div className="w-7xl">
          <h1 className="text-3xl md:text-6xl lg:text-[4.1rem] font-light leading-[1.15] mb-8">
            <span className="text-[#8B87A8]">A single platform to </span>
            <br />
            <span className="text-[#5d5878b5] font-bold">manage</span>
            <span className="text-[#8B87A8]"> every part of </span>
            <br />
            <span className="text-[#8B87A8]">your </span>
            <span className="text-[#5d5878b5] font-bold">legal work</span>
          </h1>

          <p className="md:text-xl text-[#5B68F4] leading-relaxed max-w-[500px] font-medium">
            Track matters, coordinate schedules, manage clients, centralize
            documents, and handle communication – all in one system.
          </p>
        </div>
      </div>
    </section>
  );
}
