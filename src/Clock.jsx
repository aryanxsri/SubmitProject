import React, { useState, useEffect } from 'react';
import './clock.css';
const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update every second

    return () => {
      clearInterval(interval); // Cleanup on unmount
    };
  }, []);

  const formattedTime = time.toLocaleTimeString();
  const formattedDate = time.toDateString();

  return (
    <div className='clock'> 
      <h1>Clock</h1>
      <p>Time: {formattedTime}</p>
      <p>Date: {formattedDate}</p>
    </div>
  );
};

export default Clock;
