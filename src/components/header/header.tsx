import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Styled } from "./header.styles";

import Dropdown from "react-bootstrap/Dropdown";
import { Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

export const Header = () => {
  return (
    <Styled.Header>
      <Styled.MyDropDown>
        <Styled.DropDownToggle variant="success">
          {" "}
          <Icon.Person />
        </Styled.DropDownToggle>
        <Dropdown.Menu>
          <Dropdown.Item href="/Login">Login/Register</Dropdown.Item>
          <Dropdown.Item href="/Admin">Admin</Dropdown.Item>
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
