import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { toggleTheme , selectIsDarkMode } from '../store/slices/theme.slice'
import { IoSunnyOutline , IoMoonOutline  } from "react-icons/io5";

const ThemeToggle = () => {

    const isDarkMode = useSelector(selectIsDarkMode);
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleTheme())
    }
    

  return (
    <button onClick={handleToggle} className="dark:text-light-secondary text-dark-secondary h-fit  ">
{isDarkMode ? <IoSunnyOutline className='text-[40px] p-2 hover:bg-dark-secondary rounded-full ease-in-out duration-300'/>
 : <IoMoonOutline className='text-[40px] p-2 hover:bg-light-secondary rounded-full ease-in-out duration-300' />
}
    </button>
  )
}

export default ThemeToggle ;