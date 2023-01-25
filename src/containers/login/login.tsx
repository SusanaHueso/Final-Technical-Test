import { useContext, useState } from "react";
import { Styled } from "./login.styles";
import { Form, Col, Card } from "react-bootstrap";
import { UsersAndBooks } from "../../App";
import { UserProfile } from "../user-profile/user-profile";
import { UserType } from "../../services/api";
export type LoginType = {
  setShowName: React.Dispatch<React.SetStateAction<string>>;
};

export const Login: React.FC<LoginType> = ({ setShowName }) => {
  const { users } = useContext(UsersAndBooks);
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [emailError, setEmailError] = useState<string>();
  const [passwordError, setPasswordError] = useState<string>();

  const bcrypt = require("bcryptjs");
  //manages error mesagges
  const emailRegex =
    /^[A-Za-z0-9_\-.]{1,64}@[A-Za-z0-9_\-\.]{1,7}\.[A-Za-z]{2,4}$/gm;
  const handleEmail = (emailValue: string) => {
    if (emailRegex.test(emailValue)) {
      const checkIfUserAlreadyRegistered = users.filter(
        (user: UserType) => emailValue === user.Email
      ).length;

      if (checkIfUserAlreadyRegistered > 0) {
        setEmail(emailValue);
        setEmailError("");
      }
    } else {
      setEmailError("Email not valid.");
    }
  };

  //manages the Login
  const manageCheck = () => {
    users.map((user: UserType) =>
      bcrypt.compare(password, user.Password, function (err: any, result: any) {
        if (result === false) {
          setPasswordError("Wrong Password");
        } else {
          if (user.Email === email && result) {
            sessionStorage.setItem("user", JSON.stringify(user));
            setPasswordError("");
            //to update parent
            setShowName(user.id);
          }
        }
      })
    );
  };

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
                      onBlur={(e) => handleEmail(e.target.value)}
                      type="text"
                      placeholder="Enter your name"
                    />
                    {emailError && (
                      <Styled.ErrorMessage>{emailError}</Styled.ErrorMessage>
                    )}
                  </Styled.OneFormFields>
                  <Styled.OneFormFields>
                    <Styled.Label>Password </Styled.Label>
                    <Form.Control
                      onBlur={(e) => setPassword(e.target.value)}
                      type="password"
                      placeholder="Enter our password"
                    />
                    {!emailError &&
                      emailError?.length === 0 &&
                      passwordError && (
                        <Styled.ErrorMessage>
                          {passwordError}
                        </Styled.ErrorMessage>
                      )}
                  </Styled.OneFormFields>
                  <Styled.ButtonPosition>
                    <Styled.Button onClick={() => manageCheck()}>
                      Log in
                    </Styled.Button>
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
