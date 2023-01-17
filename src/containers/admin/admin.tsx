import { useState } from "react";
import { Styled } from "./admin.styles";
import { Form, Button, Col, Card } from "react-bootstrap";
import uuid from "react-uuid";
import api from "../../services/api";

export const Admin = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const addBookToReadList = async () => {
    const response = await api.post("/books", {
      id: uuid(),
      name: name,
      author: author,
      synopsis: synopsis,
    });
    //setBooks([...books, { name: book }]);
  };

  return (
    <Styled.MyForm>
      <Col lg={23}>
        <Card className="px-4">
          <Card.Body>
            <div className="mb-3 mt-md-4">
              <h2 className="fw-bold mb-2 text-center text-uppercase ">
                Add a new book
              </h2>

              <Styled.OneFormFields>
                <Styled.Label className="text-center">Name </Styled.Label>
                <Form.Control
                  onBlur={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Enter Name"
                />
              </Styled.OneFormFields>
              <Styled.OneFormFields>
                <Styled.Label className="text-center">Author </Styled.Label>
                <Form.Control
                  onBlur={(e) => setAuthor(e.target.value)}
                  type="text"
                  placeholder="Enter Author"
                />
              </Styled.OneFormFields>
              <Styled.OneFormFields>
                <Styled.Label className="text-center">Synopsis </Styled.Label>
                <Form.Control
                  onBlur={(e) => setSynopsis(e.target.value)}
                  type="text"
                  placeholder="Enter Synopsis"
                />
              </Styled.OneFormFields>
              <Styled.ButtonPosition>
                <Button onClick={() => addBookToReadList()}>
                  Add New Book to DataBase{" "}
                </Button>
              </Styled.ButtonPosition>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Styled.MyForm>
  );
};
