import React from 'react'
import { useSelector } from 'react-redux'
import { selectIsDarkMode } from '../store/slices/theme.slice';
import logo from '../assets/images/logo.png'
import whiteLogo from '../assets/images/logo-white.png'
import ThemeToggle from './ThemeToggle';
import { Link } from 'react-router-dom';
import City from './City'

const Navbar = () => {

    const isDarkMode = useSelector(selectIsDarkMode);

  return (
    <div className='flex justify-between items-center sm:gap-[20px] gap-[10px] py-2'>
    <Link to='/'><img src={isDarkMode ? whiteLogo : logo} alt="Logo" className='lg:w-[140px] md:w-[120px] sm:w-[90px] w-[70px]'/></Link>
    <City />
    <ThemeToggle />
    </div>
  )
}

export default Navbar