import { BackgroundPill } from "@/app/types";
import { COLORS } from "@/app/constants/colors";

interface BackgroundPillsProps {
  pills: BackgroundPill[];
}

export default function BackgroundPills({ pills }: BackgroundPillsProps) {
  return (
    <>
      {pills.map((pill, index) => (
        <div
          key={index}
          className="absolute rounded-full"
          style={{
            ...pill.position,
            width: pill.width,
            height: pill.height,
            transform: `rotate(${pill.rotation}deg)`,
            backgroundColor: COLORS.pill,
          }}
        />
      ))}
    </>
  );
}
