import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getImageUrl(imageName: string) {
  console.log(new URL(`../assets/${imageName}`,import.meta.url).href);
  return new URL(`../assets/${imageName}`,import.meta.url).href ;
}
