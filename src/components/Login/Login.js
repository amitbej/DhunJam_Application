// src/components/Login/Login.js
import React, { useState } from 'react';
import './Login.css';


const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {onLogin(username, password);
  };

  return (
    <div className="login-container">
      <h1>Login Here </h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Sign In</button>
    </div>
  );
};

export default Login;

