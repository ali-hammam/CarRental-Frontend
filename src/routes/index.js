import React from 'react';
import { useRoutes } from 'react-router-dom';
import Registration from '../Pages/Registration';
import SignIn from '../Pages/SignIn';
import Home from '../Pages/Home';
import Agency from '../Pages/Agency';

const LoggedInRoutes = ({loggedIn , user}) => {
  //console.log(user);
  
  let userRoutes =  useRoutes([
    { path: "/", element: <Home /> },
  ]);

  let ownerRoutes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/agency", element: <Agency /> },
  ]);

  let unAuthorizedRoutes = useRoutes([
    { path: "/", element: <SignIn /> },
    { path: "/register", element: <Registration /> },
  ])

  let temp = user['type'] === 'user' ? userRoutes : ownerRoutes;
  if(user && user['type'] === 'user'){
    //console.log(user['type'] === 'user');
  }
  return loggedIn ? temp : unAuthorizedRoutes;
}

export default LoggedInRoutes;