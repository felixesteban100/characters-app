import { Character } from "@/types";
import { create } from "zustand";
import { batmanandSpider_manObj,  } from '../constants';

type useSelectedCharacterState = {
    selectedCharacter: Character;
    changeSelectedCharacter: (character: Character) => void;
};

export const useSelectedCharacter = create<useSelectedCharacterState>()(
    (set) => ({
        selectedCharacter: batmanandSpider_manObj[0],
        changeSelectedCharacter: (character: Character) => set((state) => ({ ...state, selectedCharacter: { ...character } })),
    })
);
