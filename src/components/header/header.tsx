import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Styled } from "./header.styles";

import Dropdown from "react-bootstrap/Dropdown";

export const Header = () => {
  return (
    <Styled.MyDropDown>
      <Dropdown.Toggle variant="success">≡</Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="/Books">Books</Dropdown.Item>
        <Dropdown.Item href="/Login">Login</Dropdown.Item>
        <Dropdown.Item href="/Admin">Admin</Dropdown.Item>
      </Dropdown.Menu>
    </Styled.MyDropDown>
  );
};
