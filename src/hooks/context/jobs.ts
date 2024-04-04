import { create } from "zustand";

type State = {
  tools: string[];
  theme: "light" | "dark";
};

type Actions = {
  addTools: (tool: string) => void;
  removeTools: (tool: string) => void;
  reset: () => void;
  changeTheme: (theme: State["theme"]) => void;
};

const initialState: State = {
  theme: "light",
  tools: [],
};

export const useJobsStore = create<State & Actions>((set) => ({
  ...initialState,
  addTools: (tool: string) => {
    set((state) => ({
      ...state,
      tools: state.tools.includes(tool) ? state.tools : [...state.tools, tool],
    }));
  },
  removeTools: (tool: string) => {
    set((state) => ({
      ...state,
      tools: state.tools.filter((stateTool) => stateTool !== tool),
    }));
  },
  reset: () => set(initialState),
  changeTheme: (theme) => set({ theme }),
}));
