// src/LoginPage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = ({ setName }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const secretPassword = '12345678';
  const isLogin= false;

  const handleLogin = () => {
    if (password === secretPassword) {
      setMessage('Logged In');
      navigate('/Homepage'); // Navigate to the homepage
      setName(username);
      setIsAuthenticated(true);
      
      localStorage.setItem('user', username);

    } else {
      setMessage('Incorrect Password');
    }
  };

  return (
    <div >
      <h1 className='h1'>Login Page</h1>
      
      <div className='LoginContainer'>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
    </div>
    </div>
  );
};

export default Login;
