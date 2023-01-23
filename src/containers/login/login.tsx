import { useContext, useState } from "react";
import { Styled } from "./login.styles";
import { Form, Button, Col, Card } from "react-bootstrap";
import { UsersAndBooks } from "../../App";
import { UserProfile } from "../user-profile/user-profile";

export const Login = ({ setShowName }: any) => {
  const { users } = useContext(UsersAndBooks);
  const [emailLogin, setEmailLogin] = useState<any>();
  const [passwordLogin, setPasswordLogin] = useState<any>();

  const bcrypt = require("bcryptjs");
  //manages the Login
  const manageLogin = () => {
    console.log("frist round");
    users.map((user: any) =>
      bcrypt.compare(
        passwordLogin,
        user.Password,
        function (err: any, result: any) {
          if (user.Email === emailLogin && result) {
            console.log("second round");
            sessionStorage.setItem("user", JSON.stringify(user));
            console.log(sessionStorage.getItem("user"));
            //to update parent
            setShowName(user.id);
          }
        }
      )
    );
  };

  // remember onBlur + save password issue
  const userLogged = JSON.parse(sessionStorage.getItem("user") || "{}");

  return (
    <Styled.Admin>
      {userLogged && // null and undefined check
      Object.keys(userLogged).length !== 0 ? (
        <UserProfile />
      ) : (
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
      )}
    </Styled.Admin>
  );
};
