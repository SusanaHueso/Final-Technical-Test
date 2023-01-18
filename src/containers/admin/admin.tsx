import { useContext, useEffect, useState } from "react";
import { Styled } from "./admin.styles";
import { Form, Button, Col, Card } from "react-bootstrap";
import uuid from "react-uuid";
import api from "../../services/api";
import { UsersAndBooks } from "../../App";

export const Admin = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const { users, books, setBooks } = useContext(UsersAndBooks);
  const [shouldDelete, setShouldDelete] = useState<any[]>([]);

  console.log(shouldDelete);
  const addBookApi = async () => {
    const response = await api.post("/books", {
      id: uuid(),
      name: name,
      author: author,
      synopsis: synopsis,
    });
    setBooks([...books, response.data]);
  };
  useEffect(() => {}, [books]);
  const markedForDeletion = (book: any) => {
    shouldDelete?.includes(book.id)
      ? setShouldDelete(shouldDelete.filter((item) => item !== book.id))
      : setShouldDelete((prevIds) => [...prevIds, book.id]);
  };

  const deleteBookApi = async () => {
    await Promise.all(shouldDelete.map((id) => api.delete(`/books/${id}`)));
    setBooks(
      books.filter((book: any) => {
        return !shouldDelete.includes(book.id);
      })
    );
    setShouldDelete([]);
  };

  return (
    <Styled.Admin>
      <Styled.MyForm>
        <Col lg={23}>
          <Card>
            <Card.Body>
              <div>
                <h2 className="fw-bold mb-2 text-center text-uppercase ">
                  Add a new book
                </h2>

                <Styled.OneFormFields>
                  <Styled.Label>Name </Styled.Label>
                  <Form.Control
                    onBlur={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Enter Name"
                  />
                </Styled.OneFormFields>
                <Styled.OneFormFields>
                  <Styled.Label>Author </Styled.Label>
                  <Form.Control
                    onBlur={(e) => setAuthor(e.target.value)}
                    type="text"
                    placeholder="Enter Author"
                  />
                </Styled.OneFormFields>
                <Styled.OneFormFields>
                  <Styled.Label>Synopsis </Styled.Label>
                  <Form.Control
                    onBlur={(e) => setSynopsis(e.target.value)}
                    type="text"
                    placeholder="Enter Synopsis"
                  />
                </Styled.OneFormFields>
                <Styled.ButtonPosition>
                  <Button onClick={() => addBookApi()}>Add</Button>
                </Styled.ButtonPosition>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Styled.MyForm>

      <Styled.MyForm>
        <Col lg={23}>
          <Card>
            <Card.Body>
              <div>
                <h2 className="fw-bold mb-2 text-center text-uppercase ">
                  Delete Books{" "}
                </h2>
                {books.map((book: any) => (
                  <div key={book.id}>
                    <Styled.OneFormFields>
                      <Form.Check
                        value={book}
                        onClick={() => markedForDeletion(book)}
                        type="checkbox"
                        label={book.name}
                      />
                    </Styled.OneFormFields>
                  </div>
                ))}
              </div>
              <Styled.ButtonPosition>
                <Button onClick={() => deleteBookApi()}>Delete</Button>
              </Styled.ButtonPosition>
            </Card.Body>
          </Card>
        </Col>
      </Styled.MyForm>
    </Styled.Admin>
  );
};
