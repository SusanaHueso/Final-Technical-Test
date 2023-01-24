import { useContext, useEffect, useState } from "react";
import { Styled } from "./admin.styles";
import { Form, Button, Col, Card } from "react-bootstrap";
import uuid from "react-uuid";
import { api } from "../../services/api";
import { UsersAndBooks } from "../../App";
import { MyDropzone } from "../../components/drop-zone/drop-zone";

export const Admin = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const { books, setBooks } = useContext(UsersAndBooks);
  const [shouldDelete, setShouldDelete] = useState<any[]>([]);
  const userLogged = JSON.parse(sessionStorage.getItem("user") || "{}");
  const [image, setImage] = useState<any>();
  const [imageBase64, setImageBase64] = useState<any>();
  const [showAddBookError, setShowAddBookError] = useState<any>();

  useEffect(() => {
    var reader = new FileReader();
    image && reader.readAsDataURL(image);
    reader.onload = function () {
      //console.log(reader.result)
      reader.result &&
        JSON.stringify(reader.result).length < 40000 &&
        setImageBase64(reader?.result);
      console.log(JSON.stringify(reader.result).length);
    };
    reader.onerror = function (error) {
      return error;
    };
  }, [image]);

  const addBookApi = async () => {
    const response = await api.post("/books", {
      id: uuid(),
      Title: title,
      Author: author,
      Genre: genre,
      Year: year,
      Synopsis: synopsis,
      Cover: imageBase64,
    });
    setBooks([...books, response.data]);
  };

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
  let user = JSON.parse(sessionStorage.getItem("user") || "{}");

  const handleAddBookForm = () => {
    if (synopsis && year && genre && author && title && imageBase64) {
      addBookApi();
      setShowAddBookError("");
    } else {
      setShowAddBookError("All fields are mandatory");
    }
  };

  return userLogged &&
    Object.keys(userLogged).length !== 0 &&
    user.isAdmin === true ? (
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
                  <Styled.Label>Title </Styled.Label>
                  <Form.Control
                    onBlur={(e) => setTitle(e.target.value)}
                    type="text"
                    placeholder="Enter Title"
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
                  <Styled.Label>Genre </Styled.Label>
                  <Form.Control
                    onBlur={(e) => setGenre(e.target.value)}
                    type="text"
                    placeholder="Enter Genre"
                  />
                </Styled.OneFormFields>
                <Styled.OneFormFields>
                  <Styled.Label>Year </Styled.Label>
                  <Form.Control
                    onBlur={(e) => setYear(e.target.value)}
                    type="text"
                    placeholder="Enter Year"
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
                <Styled.OneFormFields>
                  <Styled.Label>Image Cover </Styled.Label>
                  <MyDropzone setImage={setImage} />
                  <Styled.ErrorMessage>{showAddBookError}</Styled.ErrorMessage>
                </Styled.OneFormFields>

                <Styled.ButtonPosition>
                  <Button onClick={() => handleAddBookForm()}>Add</Button>
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
                        label={book.Title}
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
  ) : (
    <Styled.Admin>
      To access this area you should first log as an Admin
    </Styled.Admin>
  );
};
