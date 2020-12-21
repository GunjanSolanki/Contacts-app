import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Image, Button, Icon } from "semantic-ui-react";
import logo from "../../assets/images/logo.svg";

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <Menu secondary pointing>
      <Image src={logo} width={60}/>
      <Menu.Item style={{ fontsize: 24 }}>
        <Button as={Link} to="/">
          Truly Contacts
        </Button>
      </Menu.Item>
      {pathname === '/' && (
        <Menu.Item position="right">
          <Button as={Link} to="/contacts/create" primary basic icon>
            <Icon name="add"></Icon>
            Create Contacts
          </Button>
        </Menu.Item>
      )}
      {pathname === '/' && (
      <Menu.Item>
        <Button primary basic icon>
          <Icon name="log out"></Icon>
          Logout
        </Button>
      </Menu.Item>
      )}
    </Menu>
  )
}

export default Header;
