import { create } from 'zustand';
import { Character } from '../models';
import { createJSONStorage, persist } from 'zustand/middleware';

type Store = {
  	characters: Character[];
  	addCharacter: (character: Character) => void;
  	removeCharacter: (id: number) => void;
  	updateCharacter: (character: Character) => void;
	getCharacter: (id: number) => Character | undefined;
};

const useCharacters = create<Store>()(
	persist(
		(set, get) => ({
			characters: [],
			addCharacter: (character: Character) => set((state) => ({ characters: [...state.characters, character] })),
			removeCharacter: (id: number) => set((state) => ({ characters: state.characters.filter((c) => c.id !== id) })),
			updateCharacter: (character: Character) => set((state) => ({ characters: state.characters.map((c) => (c.id === character.id ? character : c)) })),
			getCharacter: (id: number) => get().characters.find((c) => c.id === id),
		}),
		{
			name: "character-storage", // name of the item in the storage
			storage: createJSONStorage(() => localStorage),
		},
	),
);

export default useCharacters;