import { LucideIcon } from "lucide-react";
import Image from "next/image";
import { FloatingCardProps } from "@/app/types";
import { COLORS } from "@/app/constants/colors";

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
  const isStackedLayout = position.top === "auto" && position.left === "auto";

  return (
    <div
      className={`shadow-lg flex items-center px-8 py-6 ${image ? "gap-0" : "gap-4"} ${isStackedLayout ? "relative w-full rounded-[50px]" : "absolute rounded-[50px]"}`}
      style={{
        ...(!isStackedLayout && position),
        backgroundColor: bgColor,
        transform: isStackedLayout ? undefined : `rotate(${rotation}deg)`,
        width: isStackedLayout ? "100%" : width,
        height: isStackedLayout ? "80px" : height,
      }}
    >
      {image ? (
        // Card with image (like John Doe Portal card)
        <>
          {/* Orange accent line before image */}
          <div
            className="flex-shrink-0 h-full w-1 mr-3"
            style={{ backgroundColor: COLORS.cards.matters }}
          />
          <div className="flex-shrink-0">
            <Image
              src="/John Image.png"
              alt={title}
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
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
