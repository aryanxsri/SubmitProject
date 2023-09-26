// src/components/IPAddress.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const IPAddress = () => {
  const [ipAddress, setIPAddress] = useState('');

  useEffect(() => {
    // Function to fetch the IP address
    const fetchIPAddress = async () => {
      try {
        const response = await axios.get('https://ipinfo.io/json');
        const data = response.data;
        setIPAddress(data.ip);
      } catch (error) {
        console.error('Error fetching IP address:', error);
      }
    };

    // Call the function to fetch the IP address
    fetchIPAddress();
  }, []);

  return (
    
    <>
    {IPAddress}
    </>
    
  );
};

export default IPAddress;
