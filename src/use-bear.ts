import { create } from "zustand";

type State = { bears: number };
type Actions = {
  increasePopulation: () => void;
  removeAllBears: () => void;
};

export const useBearStore = create<State & Actions>((set) => ({
  bears: 15,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

