import { create } from 'zustand';

interface State {
	activeId: number;
	setActiveId: (activeid: number) => void;
}

export const useCategoryStore = create<State>(set => ({
	activeId: 1,
	setActiveId: (activeid: number) => set({ activeId: activeid }),
}));
