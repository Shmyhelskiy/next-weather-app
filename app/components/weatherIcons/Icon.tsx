import { getWeatherIcon } from "@/app/servises/getWeather";
import Image from "next/image";

interface IconProps {
  iconCode: string;
  width: number;
  height:number
}

const Icon = ({ iconCode, width, height }: IconProps) => {
  const iconPath = getWeatherIcon(iconCode);
  return (
    <Image
      src={iconPath}
      width={width}
      height={height}
      alt="Weather icon"
    />
  );
};

export default Icon;
