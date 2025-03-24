import useStore from "@/app/store/weatherStore";
import { IoLocationSharp } from "react-icons/io5";


const WeatherLocation = () => {
  const weather = useStore((state) => state.weather.current);

  return (
    <div className="weather-location-container">
      {
        weather?.name && 
        <>
          <IoLocationSharp size={20}/>
          {weather.name}
        </>
      }
    </div>
  )
}

export default WeatherLocation