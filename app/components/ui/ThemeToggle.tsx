'use client'
import { useState, useEffect } from "react";
import { FaMoon } from 'react-icons/fa';
import { BsSunFill } from 'react-icons/bs';
import useThemeStore from "@/app/store/themeStore";



const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);
  const setTheme = useThemeStore((state) => state.setTheme);

  const applyTheme = (isDark: boolean) => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
      setTheme(true);
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setTheme(false);
    }
  };

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    const isDark = theme === 'dark';
    setDarkMode(isDark);
    applyTheme(isDark);
  }, []);

  useEffect(() => {
    applyTheme(darkMode);
  }, [darkMode]);

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

