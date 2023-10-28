import { Character } from "@/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type useFavoritesState = {
  favorites: Character[] | [];
  setFavorites: (favoritesS: Character[]) => void;
};

export const useFavorites = create<useFavoritesState>()(
  persist(
    (set) => ({
        favorites: [],
        setFavorites: (favoritesS: Character[] | []) => set((state) => ({ ...state, favorites: [...favoritesS] })),
    }),
    {
        name: "CHARACTERS_APP_FAVORITES",
        storage: createJSONStorage(() => localStorage),
    }
  )
);
