import React, { useState, useEffect } from "react";
import axios from "axios";

const IPAddress = () => {
  const [ipAddress, setIPAddress] = useState("");

  useEffect(() => {
    const fetchIPAddress = async () => {
      try {
        const response = await axios.get("https://ipinfo.io/json");
        const data = response.data;
        setIPAddress(data.ip);
      } catch (error) {
        console.error("Error fetching IP address:", error);
      }
    };

    fetchIPAddress();
  }, []);

  return <>{ipAddress}</>;
};

export default IPAddress;
