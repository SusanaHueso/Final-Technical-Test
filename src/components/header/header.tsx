import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Styled } from "./header.styles";
import Dropdown from "react-bootstrap/Dropdown";
import * as Icons from "react-bootstrap-icons";
import * as Icon from "@mui/icons-material";

export const Header = ({ showName }: any) => {
  const [logInOrUser, setLoginOrUser] = useState("");
  let userLogged = JSON.parse(sessionStorage.getItem("user") || "{}");
  const handleLogOut = () => {
    sessionStorage.setItem("user", "{}");
  };

  useEffect(() => {
    if (userLogged && Object.keys(userLogged).length !== 0) {
      setLoginOrUser(userLogged.Name);
    } else {
      setLoginOrUser("Log In");
    }
  }, [userLogged]);

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
            {logInOrUser}
            <Icon.Login />
          </Dropdown.Item>
          <Dropdown.Item href="/Admin">Admin</Dropdown.Item>
          {userLogged && // null and undefined check
            Object.keys(userLogged).length !== 0 && (
              <Dropdown.Item
                onClick={() => {
                  handleLogOut();
                }}
                href={window.location.href}
              >
                Log Out <Icon.Logout />
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
