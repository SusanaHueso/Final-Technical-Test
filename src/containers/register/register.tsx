import React, { useContext, useEffect, useState } from "react";
import { Styled } from "./register.styles";
import { Form, Col, Card } from "react-bootstrap";
import uuid from "react-uuid";
import { api } from "../../services/api";
import { UsersAndBooks } from "../../App";
import { UserType } from "../../services/api";
export type RegisterType = {
  clickedAway: boolean;
  setClickedAway: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Register: React.FC<RegisterType> = ({
  clickedAway,
  setClickedAway,
}) => {
  const { users, setUsers } = useContext(UsersAndBooks);
  //Register setters

  const [afterRegex, setAfterRegex] = useState({
    email: "",
    name: "",
    surname: "",
    password: "",
  });
  const [nameError, setNameError] = useState<string>();
  const [surnameError, setSurnameError] = useState<string>();
  const [emailError, setEmailError] = useState<string>();
  const [passwordError, setPasswordError] = useState<string>();
  const [success, setSuccess] = useState<string>();
  const [empty, setEmpty] = useState<string[]>();

  const emailRegex =
    /^[A-Za-z0-9_\-.]{1,64}@[A-Za-z0-9_\-\.]{1,7}\.[A-Za-z]{2,4}$/;
  const nameRegex = /^[A-Za-z]{1,10}[A-Za-z\s]{0,14}$/;
  const passwordRegex = /^[A-Za-z0-9#?!@$%^&*-]{4,16}$/;
  const checkIfUserAlreadyRegistered = (email: string) => {
    return users.filter((user: UserType) => email === user.Email).length;
  };
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

        if (empty && empty.length === 0) {
          try {
            addUserApi();
            setSuccess("Registration successsful!");
            setTimeout(() => {
              setClickedAway(true);
              setSuccess("");
            }, 2000);
          } catch (error) {
            console.log(error);
          }
        }
      }
    );
  };
  //useEffect(() => {}, []);
  useEffect(() => {
    const isEmpty = Object.values(afterRegex).filter(
      (x) => x === null || x === undefined || x === ""
    );
    setEmpty(isEmpty);
  }, [afterRegex]);

  const handleEmail = (email: string) => {
    if (email !== undefined && emailRegex.test(email)) {
      if (checkIfUserAlreadyRegistered(email) > 0) {
        setEmailError(
          "There is another user with the same email please try another"
        );
        setAfterRegex((prevState) => ({
          ...prevState,
          email: "",
        }));
      } else {
        setAfterRegex((prevState) => ({
          ...prevState,
          email: email,
        }));
        setEmailError("");
      }
    } else {
      setEmailError("Please, enter a valid email.");
      setAfterRegex((prevState) => ({
        ...prevState,
        email: "",
      }));
    }
  };
  const handleName = (name: string) => {
    if (name !== undefined && nameRegex.test(name)) {
      setAfterRegex((prevState) => ({
        ...prevState,
        name: name,
      }));
      setNameError("");
    } else {
      setNameError("Name should contain only letters");
      setAfterRegex((prevState) => ({
        ...prevState,
        name: "",
      }));
    }
  };
  const handleSurname = (surname: string) => {
    if (surname !== undefined && nameRegex.test(surname)) {
      setAfterRegex((prevState) => ({
        ...prevState,
        surname: surname,
      }));
      setSurnameError("");
    } else {
      setSurnameError("Surnames should contain only letters");
      setAfterRegex((prevState) => ({
        ...prevState,
        surname: "",
      }));
    }
  };
  const handlePassword = (password: string) => {
    if (password !== undefined && passwordRegex.test(password)) {
      setAfterRegex((prevState) => ({
        ...prevState,
        password: password,
      }));
      setPasswordError("");
    } else {
      setPasswordError("Password should contain between 4 and 16 characters");
      setAfterRegex((prevState) => ({
        ...prevState,
        password: "",
      }));
    }
  };

  return (
    <div>
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
                      onBlur={(e) => {
                        handleEmail(e.target.value);
                      }}
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
                      onBlur={(e) => handlePassword(e.target.value)}
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
                      onBlur={(e) => handleName(e.target.value)}
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
                      onBlur={(e) => handleSurname(e.target.value)}
                      type="text"
                      placeholder="Enter your surname"
                    />
                    {surnameError && (
                      <Styled.ErrorMessage>{surnameError}</Styled.ErrorMessage>
                    )}
                    {success && (
                      <Styled.SuccessMessage>{success}</Styled.SuccessMessage>
                    )}
                  </Styled.OneFormFields>

                  <Styled.ButtonPosition>
                    <Styled.Button
                      onClick={() => !success && sendPasswordToAPi()}
                    >
                      Register
                    </Styled.Button>
                  </Styled.ButtonPosition>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Styled.MyForm>
      ) : (
        <div onClick={() => setClickedAway(false)}>Register</div>
      )}
    </div>
  );
};
