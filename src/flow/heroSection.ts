import { DEFAULT_HERO_SECTION } from "@/constants";
import { effect, signal, Signal } from "@preact/signals-react";
export type HeroSection = {
    imgs: string[],
    title: string,
    description: string
};

export const heroSection: Signal<HeroSection> = signal(getHeroSection());

function getHeroSection() {
  const value = localStorage.getItem("CHARACTERS_APP_HEROSECTION");
  if (value == null) return DEFAULT_HERO_SECTION;
  return JSON.parse(value);
}

effect(() => {
  localStorage.setItem(
    "CHARACTERS_APP_HEROSECTION",
    JSON.stringify(heroSection.value)
  );
});

export function setHeroSection(value: {
  imgs: string[],
  title: string,
  description: string
}) {
  heroSection.value = value;
}

// import { create } from "zustand";
// import { persist, createJSONStorage } from "zustand/middleware";

// type useHeroSectionState = {
//   heroSection: HeroSection;
//   changeHeroSection: (heroSection: HeroSection) => void;
// };

// export const useHeroSection = create<useHeroSectionState>()(
//   persist(
//     (set) => ({
//       heroSection: DEFAULT_HERO_SECTION,
//       changeHeroSection: (heroSection: HeroSection) => set((state) => ({ ...state, heroSection: { ...heroSection } })),
//     }),
//     {
//       name: "CHARACTERS_APP_HEROSECTION",
//       storage: createJSONStorage(() => localStorage),
//     }
//   )
// );

