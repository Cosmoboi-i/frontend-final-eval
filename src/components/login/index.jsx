import React from 'react';
import './login.css';

export default function Login({ isRegister }) {
  return (
    <div className="login">
      <h1 className="heading">{isRegister ? 'Register to your CMS+ account' : 'Login to your CMS+ account'}</h1>
    </div>
  );
}
