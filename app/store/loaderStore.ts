import { create } from "zustand";

interface LoaderStore {
  isLoading: boolean ;
  setLoading: (value: boolean) => void;
}

const useLoaderStore = create<LoaderStore>((set) => ({
  isLoading: false,
  setLoading: (value) => set({ isLoading: value }),
}));

export default useLoaderStore;