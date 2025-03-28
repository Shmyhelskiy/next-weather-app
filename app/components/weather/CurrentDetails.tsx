import { FC } from 'react';
import WeatherLocation from './WeatherLocation';
import { CurrentWeather as CurrentWeatherType } from '@/app/types';
import CustomButton from '../ui/CustomButton';
import { convertTemperature, normilizedPressure } from '@/app/servises/getWeather';
import { WiDirectionUp, WiHumidity, WiStrongWind } from 'react-icons/wi';
import { RiContractUpDownFill } from 'react-icons/ri';
import { FaTemperatureHalf } from 'react-icons/fa6';

type Props = {
  current:  CurrentWeatherType;
  onFlip: () => void
}

const CurrentDetails: FC<Props> = ({current, onFlip}) => {
  return (
    <aside className="weather-container w-80 sm:w-96 relative">
      <h2>Today&apos;s weather</h2>
      <div className="weather-card"> 
        <WeatherLocation />
        <div className='w-full mt-6'>
          <ul>
            <li className=' flex items-center gap-2'>
              <FaTemperatureHalf />
              <span >Feels like:</span>
                {convertTemperature(current.main.feels_like)} °C
            </li>
            <li className='flex items-center gap-2'>
              <RiContractUpDownFill />
              <span>Pressure:</span>
              {normilizedPressure(current.main.pressure)} mb
            </li>
            <li className='flex items-center gap-2'>
              <WiHumidity />
              <span>Humidity:</span>
              {current.main.humidity} %
            </li>
            <li className='flex items-center gap-2'>
              <WiStrongWind />
              <span>Wind:</span>
              {current.wind.speed} km/h
            </li>
            <li className='flex items-center gap-2'>
              <WiDirectionUp />
              <span>Wind direction:</span>
              {current.wind.deg} &deg; 
            </li>
          </ul>
        </div>
      </div>
      <div className="absolute bottom-3 right-5">
        <CustomButton text='Back' action={onFlip}/>
      </div>
    </aside>
  )
}

export default CurrentDetails