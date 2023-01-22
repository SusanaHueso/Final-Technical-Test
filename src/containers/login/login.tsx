import { useContext, useState } from "react";
import { Styled } from "./login.styles";
import { Form, Button, Col, Card } from "react-bootstrap";

import { UsersAndBooks } from "../../App";
import { UserProfile } from "../user-profile/user-profile";

export const Login = () => {
  const { users } = useContext(UsersAndBooks);
  const [emailLogin, setEmailLogin] = useState<any>();
  const [passwordLogin, setPasswordLogin] = useState<any>();
  const [userLogged, setUserLogged] = useState();

  const bcrypt = require("bcryptjs");
  //manages the Login
  const manageLogin = () => {
    users.map((user: any) =>
      bcrypt.compare(
        passwordLogin,
        user.Password,
        function (err: any, result: any) {
          if (user.Email === emailLogin && result) {
            setUserLogged(user.id);
            sessionStorage.setItem("user", user.id);
          }
        }
      )
    );
  };
  console.log(sessionStorage.getItem("user"));
  // remember onBlur + save password issue
  return (
    <Styled.Admin>
      {sessionStorage.getItem("user") === undefined ||
      sessionStorage.getItem("user") === "-" ? (
        <Styled.MyForm>
          <Col lg={23}>
            <Card>
              <Card.Body>
                <div>
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">
                    Log In
                  </h2>
                  <Styled.OneFormFields>
                    <Styled.Label>Email </Styled.Label>
                    <Form.Control
                      onBlur={(e) => setEmailLogin(e.target.value)}
                      type="text"
                      placeholder="Enter your name"
                    />
                  </Styled.OneFormFields>
                  <Styled.OneFormFields>
                    <Styled.Label>Password </Styled.Label>
                    <Form.Control
                      onBlur={(e) => setPasswordLogin(e.target.value)}
                      type="password"
                      placeholder="Enter our password"
                    />
                  </Styled.OneFormFields>
                  <Styled.ButtonPosition>
                    <Button onClick={() => manageLogin()}>Log in</Button>
                  </Styled.ButtonPosition>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Styled.MyForm>
      ) : (
        <UserProfile></UserProfile>
      )}
    </Styled.Admin>
  );
};
