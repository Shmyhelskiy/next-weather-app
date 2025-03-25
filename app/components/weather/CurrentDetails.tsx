import { FC } from 'react';
import WeatherLocation from './WeatherLocation';
import { CurrentWeather as CurrentWeatherType } from '@/app/types';
import CustomButton from '../ui/CustomButton';

type Props = {
  current:  CurrentWeatherType;
  onFlip: () => void
}

const CurrentDetails: FC<Props> = ({current, onFlip}) => {
  console.log(current);
  
  return (
    <aside className="weather-container w-80 sm:w-96 relative">
      <h2>Today&apos;s weather</h2>
      <div className="weather-card"> 
        <WeatherLocation />
        <div>
          Details
        </div>
      </div>
      <div className="absolute bottom-3 right-3">
        <CustomButton text='Back' action={onFlip}/>
      </div>
    </aside>
  )
}

export default CurrentDetails