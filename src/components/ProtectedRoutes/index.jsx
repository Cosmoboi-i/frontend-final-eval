import React, { useState, useEffect } from 'react';
import Login from '../login';
import { AUTH_ROUTE, VALIDATE_ROUTE } from '../../constants/paths';
import makeRequest from '../../utils/makeRequest';
import { VALIDATE } from '../../constants/apiEndPoints';

export default function ProtectedRoutes({ children }) {
  const [isLogged, setIsLogged] = useState(true); //config

  const checkLogin = async () => {
    try {
      const res = await makeRequest(VALIDATE);
      console.log('ressssss', res);
      if (res) setIsLogged(true);
      else console.log('no token?');
    } catch {
      console.log('error');
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return isLogged ? <>{children}</> : <Login />;
}
