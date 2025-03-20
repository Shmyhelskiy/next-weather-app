'use client'
import { useState, useEffect } from "react";
import { FaMoon } from 'react-icons/fa';
import { BsSunFill } from 'react-icons/bs';
import useThemeStore from "../store/themeStore";


const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);
  const setTheme = useThemeStore((state) => state.setTheme);

  useEffect(() => {
    const theme = localStorage.getItem('theme');

    if ( theme === "dark") {
      setDarkMode(true);
      setTheme(true)
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      setTheme(true)
      document.documentElement.classList.remove('light')
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      setTheme(false)
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
      localStorage.setItem('theme', 'light')
    }
  },[darkMode])

  return (
    <div 
    className="relative w-20 h-10 flex items-center justify-end  bg-customSkyBlue dark:bg-customBlue  cursor-pointer rounded-full p-1"
    onClick={()=> setDarkMode(!darkMode)}
    > 
    {darkMode ? 
    <>
    <span className="pr-2">Dark</span>
    <FaMoon size={23} />
    </>
    :
    <>
    <span className="pr-2">Light</span>
    <BsSunFill size={23} color="#f5ea41"/>
    </>
    }
    </div>
  )
}

export default ThemeToggle

