'use client'
import Form from 'next/form'
import { useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa"
import { FullWeatherResponse } from '../../types';
import useLoaderStore from '@/app/store/loaderStore';
import useErrorStore from '@/app/store/errorStore';
import useWeatherStore from '@/app/store/weatherStore';
import { autocomplite } from '@/app/lib/google';
import { PlaceAutocompleteResult } from '@googlemaps/google-maps-services-js';
import { filterGoogleData } from '@/app/servises/googleDataFilter';



const SearchInput = () => {
  const [query, setQuery] = useState('');
  const [predictions, setPredictions] = useState<PlaceAutocompleteResult[]>([]);

  const setWeather = useWeatherStore((state) => state.setWeather);
  const setLoading = useLoaderStore((state) => state.setLoading);
  const setErrorText = useErrorStore((state) => state.setErrorText);

  useEffect(() => {
    const fetchPredictions = async () => {
      const predictions = await autocomplite(query);
      if (predictions) {
        const filtredPredictions = filterGoogleData(predictions);
        setPredictions(filtredPredictions)
      } else {
        setPredictions([])
      }
    };
    
    fetchPredictions();
  }, [query])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const form = e.target as HTMLFormElement;
    const query = form.elements.namedItem('query') as HTMLInputElement;
    const searchQuery = query.value;
  
    if (!searchQuery) return;
  
    try {
      setErrorText('')
      setLoading(true)
      const res = await fetch('/api/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: searchQuery }),
      });
  
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Error fetching weather');
      }
  
      const data: FullWeatherResponse = await res.json();
      
      setWeather(data)
      setLoading(false)
      setPredictions([]);
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        setLoading(false);
        setErrorText(error.message);
        console.error('Error:', error);
      } else {
        setLoading(false);
        setErrorText('An unknown error occurred');
        console.error('Unknown error:', error);
      }
      return;
    }
  };

  const handleQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  }

  const handleSelectPrediction = (description: string) => {
    setQuery(description);
    setPredictions([]);
  };

  return (
    <Form  
    action="/search"
    className="relative min-w-[320px] max-w-5xl w-full"
    onSubmit={handleSubmit}
    >
      <input 
        type="text"
        name='query'
        value={query}
        maxLength={70}
        onChange={handleQuery}
        className="w-full dark:bg-customBlue bg-customSkyBlue bg-opacity-50 rounded-full border-2 border-customBlue dark:border-white py-4 px-6 text-2xl focus:outline-none input-autofill"
      />
      <button 
        type="submit" 
        className='absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer'
      >
        <FaSearch size={20} />
      </button>

      {predictions.length > 0 && (
      <ul className="absolute top-full left-0 w-full dark:bg-customBlue bg-customSkyBlue rounded-xl shadow-xl z-10 max-h-60 overflow-auto">
        {predictions.map((item) => (
          <li
            key={item.place_id}
            className="p-1 dark:hover:bg-blue-950 hover:bg-sky-500 cursor-pointer text-sm"
            onClick={() => handleSelectPrediction(item.description)}
          >
            {item.description}
          </li>
        ))}
    </ul>
  )}
    </Form >
  )
}

export default SearchInput