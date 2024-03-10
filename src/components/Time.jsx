import React, { useState, useEffect } from 'react';

const Time = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // Update current date and time every second
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Cleanup function to clear interval
    return () => clearInterval(intervalId);
  }, []);

  // Format date and time in AM/PM format
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
  const formattedDateTime = currentDateTime.toLocaleString(undefined, options);

  return (
    <div>
      <h4 className='sm:text-lg text-sm font-bold dark:text-light-secondary text-dark-secondary'>{formattedDateTime}</h4>
    </div>
  );
};

export default Time;
