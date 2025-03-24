import { create } from "zustand";

interface LoaderStore {
  isLoading: boolean | null ;
  setLoading: (value: boolean | null) => void;
}

const useLoaderStore = create<LoaderStore>((set) => ({
  isLoading: null,
  setLoading: (value) => set({ isLoading: value }),
}));

export default useLoaderStore;