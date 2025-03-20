'use client'
import useWeatherStore from "@/app/store/weatherStore";
import { convertTemperature } from "@/app/servises/getWeather";
import { RiCelsiusFill } from "react-icons/ri";
import WeatherLocation from "./WeatherLocation";
import Icon from "../weatherIcons/Icon";


const CurrentWeather = () => {
  const weather = useWeatherStore((state) => state.weather.current);

  return (
    <aside className="weather-container w-96">
      <h2>Today&apos;s weather</h2>
      <div className="weather-card"> 
        <WeatherLocation />
        <div>
          {weather.name && 
          <>
            <Icon iconCode={weather.weather[0].icon} width={200} height={20}/>
            <div className="flex flex-col items-center">
            <p className="text-4xl flex items-center">
              {convertTemperature(weather.main.temp)} 
              <RiCelsiusFill size={40}/>
            </p>
            <p className="text-xl">{weather.weather[0].main}</p>
            </div>
          </>
          } 
        </div>
      </div>
    </aside>
  )
}

export default CurrentWeather