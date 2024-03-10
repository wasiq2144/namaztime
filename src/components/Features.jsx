import React from 'react'
import { Link } from 'react-router-dom'

const Features = () => {
  return (
    <div className='feature-boxes grid'>
      <div className="feature-box md:h-[200px] h-[150px]  md:w-[200px] w-[150px]  border-2 dark:border-light-secondary border-dark-secondary flex flex-col justify-center items-center hover:dark:bg-light-secondary hover:bg-dark-secondary light:text-dark-secondary hover:text-light-secondary hover:dark:text-dark-secondary ease-in-out duration-300 dark:text-light-secondary light:text-dark-secondary hover:light:text-light-secondary hover:light:text-light-secondary light:text-dark-secondary">
        <p className='sm:text-lg font-semibold text-sm'>Prayer Time</p>
        <button className='dark:bg-dark-secondary bg-light-secondary sm:px-4 px-3 sm:py-2 py-1 rounded-lg mt-2'><Link className='dark:text-light-secondary text-dark-secondary text-sm' to={'namaz-time'}>Check Now</Link></button>
      </div>
    </div>
  )
}

export default Features