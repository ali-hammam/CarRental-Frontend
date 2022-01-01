import React from 'react';
import { Route, Routes, useRoutes } from 'react-router-dom';
import Home from '../Pages/Home';
import Test from '../Pages/Test';

const LoggedInRoutes = () => {
  
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/test", element: <Test /> },
  ]);
  
  return routes;
  /*return (
    <Routes>
      <Route 
        path='/' 
        element={Home} 
      />

      <Route 
        path='/test'
        element={Test} 
      />
    </Routes>
  )*/
}

export default LoggedInRoutes;