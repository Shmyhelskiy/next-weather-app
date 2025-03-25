'use client'
import { ClipLoader } from "react-spinners";
import useLoaderStore from "@/app/store/loaderStore"
import ForecastWeather from "./ForecastWeather"
import useErrorStore from "@/app/store/errorStore";
import RequestError from "../errors/RequestError";
import useWeatherStore from "@/app/store/weatherStore";
import { useState } from "react";
import AnimatedCard from "../ui/AnimatedCard";

const WeatherOverview = () => {
  const isLoading = useLoaderStore((state) => state.isLoading)
  const errorText = useErrorStore((state) => state.errorText)
  const currentWeather = useWeatherStore((state) => state.weather.current);
  const forecastWeather = useWeatherStore((state) => state.weather.forecast);


  const [flipped, setFlipped] = useState(false);

  const flip = () => {
    setFlipped((cur) => !cur);
  }
  
  return (
    <section className="mt-10 flex flex-col items-center sm:items-start xl:flex-row gap-14 text-xl xl:text-2xl">
      {
        errorText ? (
          <RequestError text={errorText} />
        ) : isLoading ? (
          <div className="mt-20">
            <ClipLoader color="#ffffff" size={100} />
          </div>
        ) : isLoading === null ? null : (
          <>
            <AnimatedCard 
              flipped={flipped}
              currentWeather={currentWeather}
              flip={flip}
            />
            <ForecastWeather forecast={forecastWeather}/>
          </>
        )
      }
    </section>
  )
}

export default WeatherOverview