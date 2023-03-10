import React, { useState } from 'react';
import { LOGIN } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';
import './login.css';

export default function Login({ isRegister = false }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    return;
  };

  const handleLogin = async () => {
    if (email !== '' && password !== '') {
      try {
        const res = await makeRequest(LOGIN, { data: { email, password } });
        console.log('this is res', res);
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
      </div>
    </div>
  );
}
