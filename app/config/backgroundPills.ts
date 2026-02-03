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
    rotation: 25,
  },
  {
    position: { top: "65%", left: "-5rem" },
    width: "20rem",
    height: "6rem",
    rotation: 0,
  },
  {
    position: { top: "80%", left: "-3rem" },
    width: "25rem",
    height: "7rem",
    rotation: 0,
  },
];

export const rightPills: BackgroundPill[] = [
  {
    position: { top: "15%", right: "-8rem" },
    width: "31.25rem",
    height: "7rem",
    rotation: 0,
  },
  {
    position: { top: "30%", right: "-10rem" },
    width: "35rem",
    height: "7rem",
    rotation: 0,
  },
  {
    position: { top: "47%", right: "-6rem" },
    width: "32rem",
    height: "7.5rem",
    rotation: -8,
  },
];
