import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Styled } from "./header.styles";
import Dropdown from "react-bootstrap/Dropdown";
import * as Icon from "react-bootstrap-icons";

export const Header = ({ logOut, setLogOut }: any) => {
  const handleLogOut = () => {
    sessionStorage.setItem("user", "undefined");
    setLogOut(!logOut);
  };

  return (
    <Styled.Header>
      <Styled.Link href="/Home">
        <Icon.HouseDoor />
      </Styled.Link>
      <Styled.MyDropDown>
        <Styled.DropDownToggle variant="success">
          <Icon.Person />
        </Styled.DropDownToggle>
        <Dropdown.Menu>
          <Dropdown.Item href="/Login">Login / Client Area</Dropdown.Item>
          <Dropdown.Item href="/Admin">Admin</Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              handleLogOut();
            }}
            href=""
          >
            Logout
          </Dropdown.Item>
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
