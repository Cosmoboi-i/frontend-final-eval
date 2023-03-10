import React, { useState } from 'react';
import { LOGIN, REGISTER } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';
import './login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { HOME_ROUTE } from '../../constants/paths';

export default function Login({ isRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleNavigate = () => {
    const path = isRegister ? '/login' : '/register';
    navigate(path);
  };

  const handleRegister = async () => {
    if (email !== '' && password !== '') {
      try {
        const res = await axios.post(REGISTER.url, {
          email,
          password,
        });
        console.log('registered successfully', res.data);
        setEmail('');
        setPassword('');
      } catch (e) {
        console.log('sdsddddd', e);
      }
    }
  };

  const handleLogin = async () => {
    if (email !== '' && password !== '') {
      try {
        const res = await axios.post(LOGIN.url, {
          email,
          password,
        });
        console.log('logged in successfully', res.data);
        localStorage.setItem('token', res.data.token);
        navigate(HOME_ROUTE);
        setEmail('');
        setPassword('');
      } catch (e) {
        console.log('sdsddddd', e);
      }
    }
  };

  return (
    <div className="login">
      <h1 className="heading">{isRegister ? 'Register to your CMS+ account' : 'Login to your CMS+ account'}</h1>
      <div className="input-container">
        <div className="input">
          <div className="label">Email</div>
          <input type="email" className="login-input" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input">
          <div className="label">Password</div>
          <input
            type="password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="login-button" onClick={isRegister ? handleRegister : handleLogin}>
          {isRegister ? 'Register' : 'Login'}
        </button>
        <div className="forgot-password">Forgot password?</div>
        <div className="forgot-password" onClick={handleNavigate}>
          {isRegister ? 'Login' : 'Register'}
        </div>
      </div>
    </div>
  );
}
