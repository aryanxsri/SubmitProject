import React, { useEffect, useState } from "react";

const Location = () => {
  const [ipAddress, setIPAddress] = useState("");

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => setIPAddress(data.ip))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <p>Your IP Address is: {ipAddress}</p>
    </div>
  );
};
export default Location;
