import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import SignInRequest from "../../Requests/SignInRequest";
import { remove } from "../../Libraries/Storage";

const RightMenu = ({loggedIn, user}) => {
  if(!loggedIn){
    return (
      <Menu mode="horizontal">
        <Menu.Item key="mail">
          <Link to="/register">Sign Up</Link>
        </Menu.Item>
        <Menu.Item key="app">
          <Link to="/">Sign In</Link>
        </Menu.Item>
      </Menu>
    );
  }else{
    const onLogOut = (e) => {
      e.preventDefault();
      remove('jwt');
      document.location.reload();
    }

    if(user['type'] === 'user'){
      return (
        <Menu mode="horizontal">
          <Menu.Item key="mail">
            <Link to="/profile">Profile</Link>
          </Menu.Item>
          <Menu.Item key="app">
            <a onClick={(e) => onLogOut(e)}>Log Out</a>
          </Menu.Item>
        </Menu>
      );
    }else /*if(user['type'] === 'owner')*/{
      return (
        <Menu mode="horizontal">
          <Menu.Item key="mail">
            <Link to="/profile">Agency</Link>
          </Menu.Item>
          <Menu.Item key="app">
            <a onClick={(e) => onLogOut(e)}>Log Out</a>
          </Menu.Item>
        </Menu>
      );
    }
  }
}

export default RightMenu
