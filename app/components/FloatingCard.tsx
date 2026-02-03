import { LucideIcon } from "lucide-react";
import Image from "next/image";

interface FloatingCardProps {
  icon?: LucideIcon;
  title: string;
  bgColor: string;
  textColor?: string;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  rotation: number;
  width: string;
  height: string;
  image?: string;
  subtitle?: string;
  message?: string;
  time?: string;
}

export default function FloatingCard({
  icon: Icon,
  title,
  bgColor,
  textColor = "white",
  position,
  rotation,
  width,
  height,
  image,
  subtitle,
  message,
  time,
}: FloatingCardProps) {
  return (
    <div
      className={`absolute rounded-[40px] shadow-lg flex items-center px-8 py-6 ${image ? "gap-0" : "gap-4"}`}
      style={{
        ...position,
        backgroundColor: bgColor,
        transform: `rotate(${rotation}deg)`,
        width,
        height,
      }}
    >
      {image ? (
        // Card with image (like John Doe Portal card)
        <>
          {/* Orange accent line before image */}
          <div
            className="flex-shrink-0 h-full w-1"
            style={{ backgroundColor: "#F4A261" }}
          />
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
              {title.charAt(0)}
            </div>
          </div>
          <div className="flex-1 pl-4">
            <h3
              className="font-semibold text-base mb-0.5"
              style={{ color: textColor }}
            >
              {title}
            </h3>
            {subtitle && (
              <p
                className="text-sm opacity-90 mb-0.5"
                style={{ color: textColor }}
              >
                {subtitle}
              </p>
            )}
            {message && (
              <p className="text-xs opacity-75" style={{ color: textColor }}>
                {message}
              </p>
            )}
          </div>
        </>
      ) : (
        // Card with icon (like Billing, Matters, etc.)
        <>
          {Icon && (
            <div
              className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
            >
              <Icon size={24} style={{ color: textColor }} />
            </div>
          )}
          <h3 className="font-bold text-2xl" style={{ color: textColor }}>
            {title}
          </h3>
        </>
      )}
    </div>
  );
}
