interface WeatherDescription {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface WeatherMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface WeatherWind {
  speed: number;
  deg: number;
  gust: number;
}

interface WeatherClouds {
  all: number;
}

interface WeatherSys {
  country: string;
  sunrise: number;
  sunset: number;
}

interface WeatherCoord {
  lat: number;
  lon: number;
}

interface Weather {
  base: string;
  clouds: WeatherClouds;
  cod: number;
  coord: WeatherCoord;
  dt: number;
  id: number;
  main: WeatherMain;
  name: string;
  sys: WeatherSys;
  timezone: number;
  visibility: number;
  weather: WeatherDescription[];
  wind: WeatherWind;
}

interface WeatherForecastMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface WeatherForecastClouds {
  all: number;
}

interface WeatherForecastWind {
  speed: number;
  deg: number;
  gust: number;
}

interface WeatherForecastSys {
  pod: string;
}

interface WeatherForecastDescription {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface WeatherForecastItem {
  dt: number;
  main: WeatherForecastMain;
  weather: WeatherForecastDescription[];
  clouds: WeatherForecastClouds;
  wind: WeatherForecastWind;
  visibility: number;
  pop: number;
  rain: {
    "3h": number;
  };
  sys: WeatherForecastSys;
  dt_txt: string;
}

export interface WeatherForecast {
  city: {
    id: number;
    name: string;
    coord: WeatherCoord;
    country: string;
    population: number;
  };
  cnt: number;
  cod: string;
  list: WeatherForecastItem[];
}

export interface FullWeatherResponse {
  current: Weather;
  forecast: WeatherForecast;
}

export interface NormalizedWeatherData {
    temperature: number;
    date: string;
    isFirstDay: boolean;
}