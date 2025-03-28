'use client'
import { FC } from "react";
import { convertTemperature } from "@/app/servises/getWeather";
import { RiCelsiusFill } from "react-icons/ri";
import WeatherLocation from "./WeatherLocation";
import Icon from "../weatherIcons/Icon";
import { CurrentWeather as CurrentWeatherType } from '@/app/types';
import CustomButton from "../ui/CustomButton";

type Props = {
  current:  CurrentWeatherType;
  onFlip: () => void
}

const CurrentWeather: FC<Props> = ({current, onFlip}) => {
  return (
    <aside className="weather-container w-80 sm:w-96 relative">
      <h2>Today&apos;s weather</h2>
      <div className="weather-card"> 
        <WeatherLocation />
        <div>
            <Icon iconCode={current.weather[0].icon} width={200} height={20}/>
            <div className="flex flex-col items-center">
              <p className="text-4xl flex items-center">
                {convertTemperature(current.main.temp)} 
                <RiCelsiusFill size={40}/>
              </p>
              <p className="text-xl">{current.weather[0].main}</p>
            </div>
        </div>
      </div>
      <div className="absolute bottom-3 right-5">
        <CustomButton text='Details' action={onFlip}/>
      </div>
    </aside>
  )
}

export default CurrentWeather