import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// add this in constants ////
import { ERROR_ROUTE, HOME_ROUTE } from './constants/paths';
import Home from './Pages/Home';
import Error from './Pages/Error/';
import PageNotFound from './Pages/PageNotFound/';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={HOME_ROUTE} element={<Home />} />
          <Route path={ERROR_ROUTE + '/:statusCode'} element={<Error />} />
          <Route path={'*'} element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
