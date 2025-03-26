import { WeatherForecast } from "../types";

// Функція отримання іконки з API
export const getWeatherIcon = (iconCode: string): string => {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
};

// функція переводу кельвін у цельсії
export const convertTemperature = (temp: number) => {
  return (temp - 273.15).toFixed(1);
}

// функція нормалізація данни, стовреня масиву обєктів з темпетурою та датою
const normalizedWeatherData = (data: WeatherForecast) => {
  const normalizedData: { temperature: number; date: string; }[] = [];

  data.list.forEach((item) => {
    const container: { temperature: number; date: string } = {
      temperature: +convertTemperature(item.main.temp),
      date: item.dt_txt,
    };

    normalizedData.push(container);
  });

  return normalizedData;
};

// функція повернення дня тижня
export const getDayOfWeek = (dateString: string): string => {
  const today = new Date();
  const dateObj = new Date(dateString);

  // Обнуляємо час для порівняння
  today.setHours(0, 0, 0, 0);
  dateObj.setHours(0, 0, 0, 0);

  if (today.getTime() === dateObj.getTime()) {
    return 'Today';
  }

  return dateObj.toLocaleDateString('en-US', { weekday: 'long' });
};

export const getTimeOfDay = (dateString: string): string => {
  const [, time] = dateString.split(' ');
  const normilizedTime = time.slice(0, 5)

  return normilizedTime;
};

// Функція для отримання середини дня на основі першої та останньої точки
export const processWeatherData = (data: WeatherForecast) => {
  const normalizedData = normalizedWeatherData(data);

  let previousDate = '';
  const processedData = normalizedData.map((item) => {
    const [date] = item.date.split(' ');

    const isFirstDay = date !== previousDate;
    previousDate = date;

    return {
      ...item,
      isFirstDay,
    };
  });

  return processedData;
};

// функція петеворення тиску в систему числення в мм
export const normilizedPressure = (pressure: number): number => {
  return Math.ceil(pressure * 0.75006)
}