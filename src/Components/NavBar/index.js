import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { Link } from "react-router-dom";
import LeftMenu from "./left";
import RightMenu from "./right";
import RightUser from "./RightUser";
import RightOwner from "./RightOwner";

const Navbar = ({loggedIn, user}) => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <nav className="menuBar">
      <div className="logo">
        <Link to="/">Car Renting</Link>
      </div>
      <div className="menuCon">
        <div className="leftMenu">
          <LeftMenu />
        </div>
        <div className="rightMenu">
          {
            !loggedIn && <RightMenu /> 
          }
          {
            user['type'] === 'user' && <RightUser loggedIn={loggedIn} user={user}/>
          }
          {
            user['type'] === 'owner' && <RightOwner loggedIn={loggedIn} user={user}/>
          }
        </div>
        <Button className="barsMenu" type="primary" onClick={() => showDrawer}>
          <span className="barsBtn" />
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={false}
          onClose={() => onClose}
          visible={visible}
        >
          <LeftMenu />
          <RightMenu />
        </Drawer>
      </div>
    </nav>
  );
}

export default Navbar
