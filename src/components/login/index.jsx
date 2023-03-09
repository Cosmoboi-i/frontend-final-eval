import React from 'react';
import './login.css';

export default function Login({ isRegister = false }) {
  return (
    <div className="login">
      <h1 className="heading">{isRegister ? 'Register to your CMS+ account' : 'Login to your CMS+ account'}</h1>
      <div className="input-container">
        <div className="input">
          <div className="label">Email</div>
          <input type="email" className="login-input" />
        </div>
        <div className="input">
          <div className="label">Password</div>
          <input type="password" className="login-input" />
        </div>
        <button className="login-button" onClick={handleClick}>
          {isRegister ? 'Register' : 'Login'}
        </button>
        <div className="forgot-password">Forgot password?</div>
      </div>
    </div>
  );
}
