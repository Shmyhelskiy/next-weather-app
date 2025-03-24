'use client'
import { ClipLoader } from "react-spinners";
import useLoaderStore from "@/app/store/loaderStore"
import CurrentWeather from "./CurrentWeather"
import ForecastWeather from "./ForecastWeather"
import useErrorStore from "@/app/store/errorStore";
import RequestError from "../errors/RequestError";


const WeatherOverview = () => {
  const isLoading = useLoaderStore((state) => state.isLoading)
  const errorText = useErrorStore((state) => state.errorText)

  return (
    <section className="mt-10 flex flex-col items-center sm:items-start xl:flex-row gap-5 text-xl xl:text-2xl">
      {
        errorText ? (
          <RequestError text={errorText} />
        ) : isLoading ? (
          <div className="mt-20">
            <ClipLoader color="#ffffff" size={100} />
          </div>
        ) : isLoading === null ? null : (
          <>
            <CurrentWeather />
            <ForecastWeather />
          </>
        )
      }
    </section>
  )
}

export default WeatherOverview