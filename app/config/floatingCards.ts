import { Receipt, Home, CheckSquare, FileText } from "lucide-react";
import { FloatingCardProps } from "@/app/types";
import { COLORS } from "@/app/constants/colors";

export const floatingCardsData: Omit<FloatingCardProps, "icon">[] &
  { icon?: any }[] = [
  {
    icon: Receipt,
    title: "Billing",
    bgColor: COLORS.cards.billing,
    textColor: "#FFFFFF",
    position: { top: "48%", left: "48%" },
    rotation: 12,
    width: "360px",
    height: "85px",
  },
  {
    icon: Home,
    title: "Matters",
    bgColor: COLORS.cards.matters,
    textColor: "#FFFFFF",
    position: { top: "68%", left: "19%" },
    rotation: -12,
    width: "340px",
    height: "90px",
  },
  {
    title: "John Doe - Portal",
    subtitle: "Hey! Could you please review a",
    message: "document for me?",
    bgColor: COLORS.cards.portal,
    textColor: COLORS.cards.portalText,
    position: { top: "64%", left: "45%" },
    rotation: 4,
    width: "380px",
    height: "95px",
    image: "placeholder",
  },
  {
    icon: CheckSquare,
    title: "Tasks",
    bgColor: COLORS.cards.tasks,
    textColor: COLORS.cards.accent,
    position: { top: "84%", left: "34%" },
    rotation: 2,
    width: "300px",
    height: "85px",
  },
  {
    icon: FileText,
    title: "Documents",
    bgColor: COLORS.cards.documents,
    textColor: COLORS.cards.accent,
    position: { top: "80%", left: "63%" },
    rotation: -10,
    width: "400px",
    height: "90px",
  },
];
