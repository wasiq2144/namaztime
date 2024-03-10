import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { fetchLocation } from '../store/slices/city.slice';

const YourComponent = () => {
  const dispatch = useDispatch();
  const { cityName, countryName } = useSelector((state) => state.location);

  useEffect(() => {
    dispatch(fetchLocation());
  }, [dispatch]);

  return (
    <div className='flex justify-end'>
      <h3 className='dark:text-light-secondary text-dark-secondary md:text-lg text-sm font-bold'>{cityName} , {countryName}</h3>
    </div>
  );
};

export default YourComponent;
