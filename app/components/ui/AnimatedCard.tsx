import { motion } from 'framer-motion';
import CurrentWeather from '../weather/CurrentWeather';
import CurrentDetails from '../weather/CurrentDetails';
import { CurrentWeather as CurrentWeatherType } from "@/app/types";
import { FC } from 'react';

type Props = {
  flipped: boolean;
  currentWeather: CurrentWeatherType;
  flip: () => void;
}

const AnimatedCard: FC<Props> = ({ flipped, currentWeather, flip }) => {
  return (
    <motion.div
      className="rounded-xl [transform-style:preserve-3d] relative w-[352px] ml-10 sm:ml-0"
      animate={{ rotateY: flipped ? 180 : 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 [backface-visibility:hidden]">
        <CurrentWeather current={currentWeather} onFlip={flip} />
      </div>
      <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
        <CurrentDetails current={currentWeather} onFlip={flip} />
      </div>
    </motion.div>
  );
};

export default AnimatedCard;