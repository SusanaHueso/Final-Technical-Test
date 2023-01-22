import { useContext, useEffect, useState } from "react";
import { Styled } from "./register.styles";
import { Form, Button, Col, Card } from "react-bootstrap";
import uuid from "react-uuid";
import { api } from "../../services/api";
import { UsersAndBooks } from "../../App";

export const Register = () => {
  const { users, books, setBooks, setUsers } = useContext(UsersAndBooks);

  //Register setters
  const [emailRegister, setEmailRegister] = useState<any>();
  const [passwordRegister, setPasswordRegister] = useState<any>();
  const [name, setName] = useState<any>();
  const [surname, setSurname] = useState<any>();
  const [emailError, setEmailError] = useState<any>();

  const emailRegex =
    /^[A-Za-z0-9_\-.]{1,64}@[A-Za-z0-9_\-\.]{1,7}\.[A-Za-z]{2,4}$/gm;
  // manages the register
  const bcrypt = require("bcryptjs");
  const saltRounds = 10;
  const sendPasswordToAPi = () => {
    bcrypt.hash(passwordRegister, saltRounds, function (err: any, hash: any) {
      const addUserApi = async () => {
        const response = await api.post("/users", {
          id: uuid(),
          Name: name,
          Surname: surname,
          Email: emailRegister,
          Password: hash,
          Favouritebookslist: [],
          isAdmin: false,
        });
        setUsers([...users, response.data]);
      };
      addUserApi();
    });
  };
  const handleEmail = (emailValue: string) => {
    if (emailRegex.test(emailValue)) {
      const checkIfUserAlreadyRegistered = users.filter(
        (user: any) => emailValue === user.Email
      ).length;

      if (checkIfUserAlreadyRegistered > 0) {
        setEmailError(
          "There is another user with the same emailm please try another"
        );
      } else {
        setEmailRegister(emailValue);
        setEmailError("");
      }
    } else {
      setEmailError("Please, enter a valid email.");
    }
  };
  return (
    <Styled.Admin>
      <Styled.MyForm>
        <Col lg={23}>
          <Card>
            <Card.Body>
              <div>
                <h2 className="fw-bold mb-2 text-center text-uppercase ">
                  Register
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
                    onBlur={(e) => setPasswordRegister(e.target.value)}
                    type="password"
                    placeholder="Enter your password"
                  />
                </Styled.OneFormFields>
                <Styled.OneFormFields>
                  <Styled.Label>Name </Styled.Label>
                  <Form.Control
                    onBlur={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Enter your name"
                  />
                </Styled.OneFormFields>
                <Styled.OneFormFields>
                  <Styled.Label>Surname </Styled.Label>
                  <Form.Control
                    onBlur={(e) => setSurname(e.target.value)}
                    type="text"
                    placeholder="Enter your surname"
                  />
                </Styled.OneFormFields>
                <Styled.ButtonPosition>
                  <Button onClick={() => sendPasswordToAPi()}>Register</Button>
                </Styled.ButtonPosition>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Styled.MyForm>
    </Styled.Admin>
  );
};
