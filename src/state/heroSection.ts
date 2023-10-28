import { DEFAULT_HERO_SECTION } from "@/constants";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type HeroSection = {
    imgs: string[],
    title: string,
    description: string
};

type useHeroSectionState = {
  heroSection: HeroSection;
  changeHeroSection: (heroSection: HeroSection) => void;
};

export const useHeroSection = create<useHeroSectionState>()(
  persist(
    (set) => ({
      heroSection: DEFAULT_HERO_SECTION,
      changeHeroSection: (heroSection: HeroSection) => set((state) => ({ ...state, currentUser: { ...heroSection } })),
    }),
    {
      name: "CHARACTERS_APP_HEROSECTION",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
