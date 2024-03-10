import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNamazTime } from '../store/slices/namaztime.slice';

// Utility function to convert time from 24-hour format to AM/PM format
function convertToAmPm(militaryTime) {
  const [hour, minute] = militaryTime.split(':').map(Number);
  const amPmHour = (hour % 12) || 12;
  const amPm = hour >= 12 ? 'PM' : 'AM';
  return `${amPmHour}:${minute < 10 ? '0' : ''}${minute} ${amPm}`;
}

const NamazTable = () => {
  const dispatch = useDispatch();
  const { prayerTimes, error } = useSelector((state) => state.namaz);
  const { cityName, countryName } = useSelector((state) => state.location);

  useEffect(() => {
    if (cityName && countryName) {
      dispatch(fetchNamazTime({ cityName, countryName }));
    }
  }, [dispatch, cityName, countryName]);


  if (!prayerTimes) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message || 'Unknown Error'}</div>;
  }

  return (
    <div className='dark:text-light-secondary text-dark-secondary text-center mt-5'>
      <h2 className='sm:text-xl text-lg'>Namaz Times</h2>
      <table className='table-auto sm:w[70%] w-[100%]  text-center mx-auto'>
        <thead>
          <tr className='border-b-2 dark:border-light-secondary border-dark-secondary'>
            <th className='sm:text-lg text-sm  py-1'>Prayer</th>
            <th className='sm:text-lg text-sm py-1'>Time</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(prayerTimes).map(([prayer, time]) => (
            <tr key={prayer} className='border-b-2 dark:border-light-secondary border-dark-secondary'>
              <td className='py-1 font-semibold sm:text-lg text-sm'>{prayer}</td>
              <td className='py-1 sm:text-lg text-sm'>{convertToAmPm(time)}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default NamazTable;