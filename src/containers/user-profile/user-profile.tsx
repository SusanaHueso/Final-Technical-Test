import { useContext, useState } from "react";
import { Styled } from "./user-profile.styles";
import { Form, Col, Card } from "react-bootstrap";
import { api } from "../../services/api";
import { UsersAndBooks } from "../../App";
import { OnlyBookType } from "../../components/book/book";

export const UserProfile = () => {
  const { users, setUsers } = useContext(UsersAndBooks);
  const [shouldDelete, setShouldDelete] = useState<string[]>([]);
  let userLogged = JSON.parse(sessionStorage.getItem("user") || "{}");
  const markedForDeletion = (book: OnlyBookType) => {
    shouldDelete?.includes(book.id)
      ? setShouldDelete(shouldDelete.filter((item) => item !== book.id))
      : setShouldDelete((prevIds) => [...prevIds, book.id]);
  };
  const deleteUserBooksApi = async () => {
    //changes the favourite list

    const updatedUser = {
      id: userLogged?.id,
      Name: userLogged?.Name,
      Surname: userLogged?.Surname,
      Email: userLogged?.Email,
      Password: userLogged?.Password,
      Favouritebookslist: userLogged?.Favouritebookslist?.filter(
        (book: OnlyBookType) => !shouldDelete?.includes(book.id)
      ),
      isAdmin: userLogged?.isAdmin,
    };
    const response2 = await api.put(`/users/${userLogged?.id}`, updatedUser);
    setUsers([...users, response2.data]);
    sessionStorage.setItem("user", JSON.stringify(updatedUser));
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
                  Delete From My List
                </h2>
                {userLogged?.Favouritebookslist?.map((book: OnlyBookType) => (
                  <div key={book.id}>
                    <Styled.OneFormFields>
                      <Form.Check
                        onClick={() => markedForDeletion(book)}
                        type="checkbox"
                        label={book.Title}
                      />
                    </Styled.OneFormFields>
                  </div>
                ))}
              </div>
              <Styled.ButtonPosition>
                <Styled.Button onClick={() => deleteUserBooksApi()}>
                  Delete
                </Styled.Button>
              </Styled.ButtonPosition>
            </Card.Body>
          </Card>
        </Col>
      </Styled.MyForm>
    </Styled.Admin>
  );
};
