export async function getWeather(query: string) {
  
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  
  try {
    const resCoord = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&appid=${apiKey}`);
    
    if (!resCoord.ok) {
      throw new Error(`Failed to get coordinates for query: ${query}. Status: ${resCoord.status}`);
    }
    
    const sityCoord = await resCoord.json();
  
    if (!sityCoord || sityCoord.length === 0) {
      throw new Error(`wrong request: ${query}, check your request`);
    }
   
    
    const { lat, lon } = sityCoord[0];
    
    const periodWeather = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`);
    const currentWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
    
    
    if (!periodWeather.ok || !currentWeather.ok) {
        throw new Error(`Failed to fetch weather data`);
      }
      
    const weather = {
      current: await currentWeather.json(),
      forecast: await periodWeather.json()
    };
    
    return weather;
    
  } catch (error) {
    throw error;
  }
}

