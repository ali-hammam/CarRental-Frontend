import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import  LoggedInRoutes  from './routes';

const  App = () => {
  return(
    <BrowserRouter>
      <LoggedInRoutes />
    </BrowserRouter>
  )
}

export default App;
