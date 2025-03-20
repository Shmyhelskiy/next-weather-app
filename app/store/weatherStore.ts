import { create } from "zustand";
import { FullWeatherResponse } from "../types"

interface WeatherStore {
  weather: FullWeatherResponse;
  setWeather: (data: FullWeatherResponse) => void;
}

const useWeatherStore = create<WeatherStore>((set) => ({
  weather: {
    current: {} as FullWeatherResponse["current"],
    forecast: {} as FullWeatherResponse["forecast"],
  },
  setWeather: (data) => set({ weather: data }),
}));

export default useWeatherStore
