import { create } from "zustand";

type useSearchDifferentCharactersState = {
    searchDifferentCharacters: boolean;
    setSearchDifferentCharacters: (value: boolean) => void;
};

export const useSearchDifferentCharacters = create<useSearchDifferentCharactersState>()(
    (set) => ({
        searchDifferentCharacters: false,
        setSearchDifferentCharacters: (value: boolean) => set((state) => ({ ...state, searchDifferentCharacters: value })),
    })
);
