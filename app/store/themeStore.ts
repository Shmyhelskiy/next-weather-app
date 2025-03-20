import { create } from "zustand";

interface ThemeStore {
  darkTheme: boolean ;
  setTheme: (value: boolean) => void;
}

const useThemeStore = create<ThemeStore>((set) => ({
  darkTheme: false,
  setTheme: (value) => set({ darkTheme: value }),
}));

export default useThemeStore;