'use client'
import { ClipLoader } from "react-spinners";
import useLoaderStore from "@/app/store/loaderStore"
import CurrentWeather from "./CurrentWeather"
import ForecastWeather from "./ForecastWeather"
import useErrorStore from "@/app/store/errorStore";
import RequestError from "../CustomError/Error";


const WeatherOverview = () => {
  const isLoading = useLoaderStore((state) => state.isLoading)
  const errorText = useErrorStore((state) => state.errorText)

  return (
    <section className="mt-10 flex gap-5 text-2xl">
      {
  errorText
    ? <RequestError  text={errorText}/>
    : isLoading
      ? <div className="mt-20">
          <ClipLoader color="#ffffff" size={100} />
        </div>
      : <>
          <CurrentWeather />
          <ForecastWeather />
        </>
}
    </section>
  )
}

export default WeatherOverview