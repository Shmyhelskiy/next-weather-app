'use client'
import Form from 'next/form'
import { useState } from 'react';
import { FaSearch } from "react-icons/fa"
import { FullWeatherResponse } from '../../types';
import useLoaderStore from '@/app/store/loaderStore';
import useErrorStore from '@/app/store/errorStore';
import useWeatherStore from '@/app/store/weatherStore';



const SearchInput = () => {
  const [query, setQuery] = useState('');
  const setWeather = useWeatherStore((state) => state.setWeather);

  const setLoading = useLoaderStore((state) => state.setLoading);
  const setErrorText = useErrorStore((state) => state.setErrorText);

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

  function handleQuery(event: React.ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
  }

  return (
    <Form  
    action="/search"
    className="min-w-[320px] max-w-5xl w-full flex justify-between dark:bg-customBlue bg-customSkyBlue bg-opacity-50 rounded-full border-2 border-customBlue dark:border-white py-0 sm:py-4"
    onSubmit={handleSubmit}
    >
      <input 
        type="text"
        name='query'
        value={query}
        maxLength={70}
        onChange={handleQuery}
        className='dark:bg-customBlue bg-customSkyBlue rounded-full p-4 h-12 w-3xl text-2xl focus:outline-none input-autofill'

      />
      <button type="submit">
      <FaSearch className="sm:mr-4 cursor-pointer" size={20} />
      </button>
    </Form >
  )
}

export default SearchInput