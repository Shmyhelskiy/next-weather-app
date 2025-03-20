'use client'
import { getDayOfWeek } from "@/app/servises/getWeather";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTick = ({ x, y, payload, color}: any) => {
  const [date] = payload.value.split(' ');
  const day = getDayOfWeek(date);

  return (
    <g transform={`translate(${x},${y})`}>
      <text textAnchor="middle" fill="#fff" dy={16} style={{ fontSize: '1rem', color: color }} >
        {day}
      </text>
    </g>
  );
};

export default CustomTick