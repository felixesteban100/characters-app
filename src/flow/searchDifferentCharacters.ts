// import { create } from "zustand";

// type useSearchDifferentCharactersState = {
//     searchDifferentCharacters: boolean;
//     setSearchDifferentCharacters: (value: boolean) => void;
// };

// export const useSearchDifferentCharacters = create<useSearchDifferentCharactersState>()(
//     (set) => ({
//         searchDifferentCharacters: false,
//         setSearchDifferentCharacters: (value: boolean) => set((state) => ({ ...state, searchDifferentCharacters: value })),
//     })
// );

import { signal, Signal } from "@preact/signals-react";

export const searchDifferentCharacters: Signal<boolean> = signal(false);

export function setSearchDifferentCharacters(value: boolean) {
  searchDifferentCharacters.value = value;
}
