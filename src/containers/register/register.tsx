import { useContext, useEffect, useState } from "react";
import { Styled } from "./register.styles";
import { Form, Button, Col, Card } from "react-bootstrap";
import uuid from "react-uuid";
import { api } from "../../services/api";
import { UsersAndBooks } from "../../App";

export const Register = ({ clickedAway, setClickedAway }: any) => {
  const { users, books, setBooks, setUsers } = useContext(UsersAndBooks);

  //Register setters
  const [beforeRegex, setBeforeRegex] = useState({
    email: "",
    name: "",
    surname: "",
    password: "",
  });
  const [afterRegex, setAfterRegex] = useState({
    email: "",
    name: "",
    surname: "",
    password: "",
  });
  const [nameError, setNameError] = useState<any>();
  const [surnameError, setSurnameError] = useState<any>();
  const [emailError, setEmailError] = useState<any>();
  const [passwordError, setPasswordError] = useState<any>();

  const emailRegex =
    /^[A-Za-z0-9_\-.]{1,64}@[A-Za-z0-9_\-\.]{1,7}\.[A-Za-z]{2,4}$/;
  const nameRegex = /^[A-Za-z]{1,10}[A-Za-z\s]{0,14}$/;
  const passwordRegex = /^[A-Za-z0-9#?!@$%^&*-]{4,16}$/;

  // manages the register
  const bcrypt = require("bcryptjs");
  const saltRounds = 10;
  const sendPasswordToAPi = () => {
    bcrypt.hash(
      afterRegex.password,
      saltRounds,
      function (err: any, hash: any) {
        const addUserApi = async () => {
          const response = await api.post("/users", {
            id: uuid(),
            Name: afterRegex.name,
            Surname: afterRegex.surname,
            Email: afterRegex.email,
            Password: hash,
            Favouritebookslist: [],
            isAdmin: false,
          });
          setUsers([...users, response.data]);
        };
        const isEmpty = Object.values(afterRegex).every(
          (x) => x === null || x === undefined || x === ""
        );
        if (!isEmpty) {
          addUserApi();
        }
      }
    );
  };

  const handleEmail = () => {
    if (beforeRegex.email !== undefined && emailRegex.test(beforeRegex.email)) {
      const checkIfUserAlreadyRegistered = users.filter(
        (user: any) => beforeRegex.email === user.Email
      ).length;

      if (checkIfUserAlreadyRegistered > 0) {
        setEmailError(
          "There is another user with the same email please try another"
        );
      } else {
        setAfterRegex((prevState) => ({
          ...prevState,
          email: beforeRegex.email,
        }));
        setEmailError("");
      }
    } else {
      setEmailError("Please, enter a valid email.");
    }
  };
  const handleName = () => {
    if (beforeRegex.name !== undefined && nameRegex.test(beforeRegex.name)) {
      setAfterRegex((prevState) => ({
        ...prevState,
        email: beforeRegex.name,
      }));
      setNameError("");
    } else {
      setNameError("Name should contain only letters");
    }
  };
  const handleSurname = () => {
    if (
      beforeRegex.surname !== undefined &&
      nameRegex.test(beforeRegex.surname)
    ) {
      setAfterRegex((prevState) => ({
        ...prevState,
        email: beforeRegex.surname,
      }));
      setSurnameError("");
    } else {
      setSurnameError("Surnames should contain only letters");
    }
  };
  const handlePassword = () => {
    if (
      beforeRegex.password !== undefined &&
      passwordRegex.test(beforeRegex.password)
    ) {
      setAfterRegex((prevState) => ({
        ...prevState,
        email: beforeRegex.password,
      }));
      setPasswordError("");
    } else {
      setPasswordError("Password should contain between 4 and 16 characters");
    }
  };

  const handleSendPasswordToAPi = () => {
    handleName();
    handleEmail();
    handleSurname();
    handlePassword();
    sendPasswordToAPi();
  };
  return (
    <Styled.Admin>
      {clickedAway === false ? (
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
                      onBlur={(e) =>
                        setBeforeRegex((prevState) => ({
                          ...prevState,
                          email: e.target.value,
                        }))
                      }
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
                      onBlur={(e) =>
                        setBeforeRegex((prevState) => ({
                          ...prevState,
                          password: e.target.value,
                        }))
                      }
                      type="password"
                      placeholder="Enter your password"
                    />
                    {passwordError && (
                      <Styled.ErrorMessage>{passwordError}</Styled.ErrorMessage>
                    )}
                  </Styled.OneFormFields>
                  <Styled.OneFormFields>
                    <Styled.Label>Name </Styled.Label>
                    <Form.Control
                      onBlur={(e) =>
                        setBeforeRegex((prevState) => ({
                          ...prevState,
                          name: e.target.value,
                        }))
                      }
                      type="text"
                      placeholder="Enter your name"
                    />
                    {nameError && (
                      <Styled.ErrorMessage>{nameError}</Styled.ErrorMessage>
                    )}
                  </Styled.OneFormFields>
                  <Styled.OneFormFields>
                    <Styled.Label>Surname </Styled.Label>
                    <Form.Control
                      onBlur={(e) =>
                        setBeforeRegex((prevState) => ({
                          ...prevState,
                          surname: e.target.value,
                        }))
                      }
                      type="text"
                      placeholder="Enter your surname"
                    />
                    {surnameError && (
                      <Styled.ErrorMessage>{surnameError}</Styled.ErrorMessage>
                    )}
                  </Styled.OneFormFields>

                  <Styled.ButtonPosition>
                    <Button onClick={() => handleSendPasswordToAPi()}>
                      Register
                    </Button>
                  </Styled.ButtonPosition>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Styled.MyForm>
      ) : (
        <div onClick={() => setClickedAway(false)}>Register</div>
      )}
    </Styled.Admin>
  );
};
