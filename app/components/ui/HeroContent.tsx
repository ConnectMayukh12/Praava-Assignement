interface HeroContentProps {}

export default function HeroContent({}: HeroContentProps) {
  return (
    <div className="relative z-10 container mx-auto px-[200px] pt-11">
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
  );
}
