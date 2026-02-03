import { LucideIcon } from "lucide-react";

export interface Position {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

export interface FloatingCardProps {
  icon?: LucideIcon;
  title: string;
  bgColor: string;
  textColor?: string;
  position: Position;
  rotation: number;
  width: string;
  height: string;
  image?: string;
  subtitle?: string;
  message?: string;
  time?: string;
}

export interface BackgroundPill {
  position: Position;
  width: string;
  height: string;
  rotation: number;
}
