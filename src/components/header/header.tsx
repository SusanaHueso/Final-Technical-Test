import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Styled } from "./header.styles";
import Dropdown from "react-bootstrap/Dropdown";
import * as Icons from "react-bootstrap-icons";
import * as Icon from "@mui/icons-material";

export const Header = () => {
  const handleLogOut = () => {
    sessionStorage.setItem("user", "-");
  };

  return (
    <Styled.Header>
      <Styled.Link href="/Home">
        <Icons.HouseDoor />
      </Styled.Link>
      <Styled.MyDropDown>
        <Styled.DropDownToggle variant="success">
          <Icons.Person />
        </Styled.DropDownToggle>
        <Dropdown.Menu>
          <Dropdown.Item href="/Login">
            Login <Icon.Login />
          </Dropdown.Item>
          <Dropdown.Item href="/Admin">Admin</Dropdown.Item>
          {sessionStorage.getItem("user") !== undefined && (
            <Dropdown.Item
              onClick={() => {
                handleLogOut();
              }}
              href={window.location.href}
            >
              Logout <Icon.Logout />
            </Dropdown.Item>
          )}
        </Dropdown.Menu>
      </Styled.MyDropDown>

      <Styled.MyDropDown>
        <Styled.DropDownToggle variant="success">≡</Styled.DropDownToggle>
        <Dropdown.Menu>
          <Dropdown.Item href="/Books">Books</Dropdown.Item>
        </Dropdown.Menu>
      </Styled.MyDropDown>
    </Styled.Header>
  );
};
