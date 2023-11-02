import { Character } from "@/types";
import { batmanandSpider_manObj } from "../constants";
import { Signal, signal } from "@preact/signals-react";

// import { create } from "zustand";
// type useSelectedCharacterState = {
//     selectedCharacter: Character;
//     changeSelectedCharacter: (character: Character) => void;
// };

// export const useSelectedCharacter = create<useSelectedCharacterState>()(
//     (set) => ({
//         selectedCharacter: batmanandSpider_manObj[0],
//         changeSelectedCharacter: (character: Character) => set((state) => ({ ...state, selectedCharacter: { ...character } })),
//     })
// );

export const selectedCharacter: Signal<Character> = signal(
  batmanandSpider_manObj[0]
);

export function setSelectedCharacter(selectedCharacterS: Character) {
  selectedCharacter.value = selectedCharacterS;
}

