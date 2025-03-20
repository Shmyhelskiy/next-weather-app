import SearchInput from "./components/SearchInput";
import WeatherOverview from "./components/Weather.components/WeatherOverview";

export default async function Home() {
  return (
    <main className="flex justify-center items-center text-6xl flex-col">
      <h1 className="pb-4">Weather in 5 Days</h1>
      <SearchInput />
      <WeatherOverview />
    </main>
  );
}
