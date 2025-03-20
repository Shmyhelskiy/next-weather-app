import { create } from "zustand";

interface ErrorStore {
  errorText: string ;
  setErrorText: (value: string) => void;
}

const useErrorStore = create<ErrorStore>((set) => ({
  errorText: '',
  setErrorText: (value) => set({ errorText: value }),
}));

export default useErrorStore;