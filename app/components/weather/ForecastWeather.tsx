'use client'
import WeatherChart from "../charts/WeatherChart";
import { processWeatherData } from "@/app/servises/getWeather";
import useThemeStore from "@/app/store/themeStore";
import WeatherLocation from "./WeatherLocation";
import { FC } from "react";
import { WeatherForecast as WeatherForecastType } from "@/app/types";

type Props = {
  forecast:  WeatherForecastType;
}

const ForecastWeather: FC<Props> = ({forecast}) => {
  const darkTheme = useThemeStore((state) => state.darkTheme);
  
  return (
    <>
      <section className="weather-container w-full lg:w-4xl">
        <h2>Temperature Forecast in 5 days</h2>
        <div className="weather-card">
          <WeatherLocation />
          <WeatherChart data={processWeatherData(forecast)} color={darkTheme ? '#fff' : '#000'}/>
        </div>
      </section>
    </>
  );
  
}

export default ForecastWeather