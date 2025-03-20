'use client'
import useWeatherStore from "@/app/store/weatherStore";
import WeatherChart from "../charts/WeatherChart";
import WeatherLocation from "./WeatherLocation";
import { processWeatherData } from "@/app/servises/getWeather";
import useThemeStore from "@/app/store/themeStore";

const ForecastWeather = () => {
  const weather = useWeatherStore((state) => state.weather.forecast);
  const darkTheme = useThemeStore((state) => state.darkTheme);
  
  return (
    <>
      <section className="weather-container w-4xl">
        <h2>Temperature Forecast in 5 days</h2>
        <div className="weather-card">
          <WeatherLocation />
          {weather.list &&  
            <WeatherChart data={processWeatherData(weather)} color={darkTheme ? '#fff' : '#000'}/>
          }
        </div>
      </section>
    </>
  );
  
}

export default ForecastWeather