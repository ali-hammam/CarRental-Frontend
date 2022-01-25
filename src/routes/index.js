import React from 'react';
import { useRoutes } from 'react-router-dom';
import Registration from '../Pages/Registration';
import SignIn from '../Pages/SignIn';
import Home from '../Pages/Home';
import Agency from '../Pages/Agency';
import List from '../Pages/CarList';
import RentedAgencyCars from '../Components/Forms/Car/RentedAgencyCars';
import Test from '../Pages/Test';

const LoggedInRoutes = ({loggedIn , user}) => {  
  let userRoutes =  useRoutes([
    { path: "/", element: <Home /> },
    { path: "/cars", element: <List /> }
  ]);

  let ownerRoutes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/agency", element: <Agency /> },
    { path: "/cars", element: <RentedAgencyCars /> },
    { path: "/test", element: <Test /> }
  ]);

  let unAuthorizedRoutes = useRoutes([
    { path: "/", element: <SignIn /> },
    { path: "/register", element: <Registration /> },
  ])

  let temp = user['type'] === 'user' ? userRoutes : ownerRoutes;

  return loggedIn ? temp : unAuthorizedRoutes;
}

export default LoggedInRoutes;