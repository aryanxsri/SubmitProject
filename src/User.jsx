import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleLogin = () => {
    if (username) {
      sessionStorage.setItem('username', username);
      setIsLoggedIn(true);
    } else {
      alert('Please enter a username.');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('username');
    setIsLoggedIn(false);
  };

  return (
    <div>
      <h1>Login Example</h1>
      {isLoggedIn ? (
        <div>
          <p>Welcome, {sessionStorage.getItem('username')}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={handleUsernameChange}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default App;
