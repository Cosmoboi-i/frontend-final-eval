import React, { useState, useEffect } from 'react';
import Login from '../login';
import { AUTH_ROUTE, LOGIN_ROUTE, VALIDATE_ROUTE } from '../../constants/paths';
import makeRequest from '../../utils/makeRequest';
import { VALIDATE } from '../../constants/apiEndPoints';
import { useNavigate } from 'react-router-dom';

export default function ProtectedRoutes({ children }) {
  const [isLogged, setIsLogged] = useState(false); //config

  const navigate = useNavigate();

  const checkLogin = async () => {
    try {
      const res = await makeRequest(VALIDATE);
      console.log('ressssss', res);
      if (res) setIsLogged(true);
      else navigate(LOGIN_ROUTE);
    } catch {
      console.log('error');
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return <>{children}</>;
}
