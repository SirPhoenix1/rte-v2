import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export enum Alignment {
  LEFT = "left",
  RIGHT = "right",
  CENTER = "center",
  JUSTIFY = "justify",
}
