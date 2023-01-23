import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Styled } from "./header.styles";
import Dropdown from "react-bootstrap/Dropdown";
import * as Icon from "@mui/icons-material";

export const Header = ({ showName }: any) => {
  const [logInOrUser, setLoginOrUser] = useState("");
  let userLogged = JSON.parse(sessionStorage.getItem("user") || "{}");
  const handleLogOut = () => {
    sessionStorage.setItem("user", "{}");
  };

  useEffect(() => {
    if (userLogged && Object.keys(userLogged).length !== 0) {
      setLoginOrUser("Welcome, " + userLogged.Name);
    } else {
      setLoginOrUser("Log In");
    }
  }, [userLogged]);

  return (
    <Styled.Header>
      <Styled.Link href="/Home">
        <Icon.Home />
      </Styled.Link>
      <Styled.MyDropDown>
        <Styled.DropDownToggle variant="success">
          <Icon.AccountCircle />
        </Styled.DropDownToggle>
        <Dropdown.Menu>
          <Dropdown.Item href="/Login">
            {userLogged && Object.keys(userLogged).length !== 0 ? (
              <Icon.ManageAccounts />
            ) : (
              <Icon.Login />
            )}
            {logInOrUser}
          </Dropdown.Item>
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
      <Styled.Link href="/Books">
        <Icon.AutoStories />
      </Styled.Link>
      <Styled.Link href="/Admin">
        <Icon.AdminPanelSettings />
      </Styled.Link>
    </Styled.Header>
  );
};
