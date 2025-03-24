import { Area, AreaChart, CartesianGrid, Label, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { NormalizedWeatherData } from "../../types";
import { FC } from "react";
import CustomTick from "./CustomTick";
import { getDayOfWeek, getTimeOfDay } from "@/app/servises/getWeather";

type Props = {
  data: NormalizedWeatherData[];
  color: string;
};

const WeatherChart: FC<Props> = ({ data, color}) => {
  return (
    <ResponsiveContainer width="90%" maxHeight={300}>
      <AreaChart data={data} margin={{ top: 15, right: 30, left: 20, bottom: 5 }}>
        <defs>
          <linearGradient id="verticalGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#5E74A6" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#30436E" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid horizontal={false} stroke={color}/>
        <XAxis dataKey="date" tick={<CustomTick/>} stroke={color}/>
        <YAxis stroke={color}>
          <Label value="°C" offset={0} position="insideTopLeft" dx={-20} dy={-10} stroke={color}/>
        </YAxis>
        <Tooltip
          formatter={(value, name, props) => {
            const day = getDayOfWeek(props?.payload?.date);
            const time = getTimeOfDay(props?.payload?.date)

            return [`${day} ${time}:  ${value}°C`,]
          }}
          labelFormatter={() => ''}
        />
        <Area
          type="monotone"
          dataKey="temperature"
          dot={false}
          stroke="#6576A1"
          fill="url(#verticalGradient)"
        />
        {data
          .filter((item) => item.isFirstDay)
          .map((item, index) => (
            <ReferenceLine
              key={index}
              x={item.date}
              stroke="rgba(255, 255, 255, 0.3)"
              strokeDasharray="3 3"
            />
          ))}
      </AreaChart>
    </ResponsiveContainer>

  )
}

export default WeatherChart