export interface BackgroundPill {
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  width: string;
  height: string;
  rotation: number;
}

export const leftPills: BackgroundPill[] = [
  {
    position: { top: "50%", left: "-4rem" },
    width: "16rem",
    height: "6rem",
    rotation: -10,
  },
  {
    position: { top: "69%", left: "-5rem" },
    width: "16rem",
    height: "6rem",
    rotation: 0,
  },
  {
    position: { top: "85%", left: "-7rem" },
    width: "36rem",
    height: "7rem",
    rotation: 0,
  },
];

export const rightPills: BackgroundPill[] = [
  {
    position: { top: "15%", right: "-2rem" },
    width: "11.25rem",
    height: "5rem",
    rotation: 8,
  },
  {
    position: { top: "30%", right: "-5rem" },
    width: "35rem",
    height: "5rem",
    rotation: 0,
  },
  {
    position: { top: "47%", right: "-8rem" },
    width: "32rem",
    height: "5.6rem",
    rotation: 0,
  },
];
