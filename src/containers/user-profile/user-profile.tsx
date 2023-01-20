import { SetStateAction, useContext, useEffect, useState } from "react";
import { Styled } from "./user-profile.styles";
import { Form, Button, Col, Card } from "react-bootstrap";
import uuid from "react-uuid";
import api from "../../services/api";
import { UsersAndBooks } from "../../App";

export const UserProfile = () => {
  const { users, books, setBooks, setUsers } = useContext(UsersAndBooks);
  const [shouldDelete, setShouldDelete] = useState<any[]>([]);
  const [userLogged, setUserLogged] = useState<any>();
  const [newFavouriteList, setNewFavouriteList] = useState<any[]>([]);
  const markedForDeletion = (book: any) => {
    shouldDelete?.includes(book.id)
      ? setShouldDelete(shouldDelete.filter((item) => item !== book.id))
      : setShouldDelete((prevIds) => [...prevIds, book.id]);
  };

  const deleteUserBooksApi = async () => {
    users.map(async (user: any) => {
      if (user.id === sessionStorage.getItem("user")) {
        //changes the favourite list
        user.Favouritebookslist.map(
          (book: any) =>
            !shouldDelete?.includes(book.id) && setNewFavouriteList(book)
        );

        await api.delete(`/users/${user.id}`);

        await Promise.all((userLogged.Favouritebookslist = newFavouriteList));

        const response2 = await api.post("/users", {
          id: userLogged.id,
          Name: userLogged.Name,
          Surname: userLogged.Surname,
          Email: userLogged.Email,
          Password: userLogged.Password,
          Favouritebookslist:
            userLogged.Favouritebookslist.length === 0
              ? []
              : userLogged.Favouritebookslist,
        });
        setUsers([...users, response2.data]);
      }
    });
    setShouldDelete([]);
  };
  //todo: implement custom hook userLogged
  useEffect(
    () =>
      users.map((user: any) => {
        if (user.id === sessionStorage.getItem("user")) {
          setUserLogged(user);
        }
      })[users]
  );
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
                {userLogged?.Favouritebookslist?.map((book: any) => (
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
                <Button onClick={() => deleteUserBooksApi()}>Delete</Button>
              </Styled.ButtonPosition>
            </Card.Body>
          </Card>
        </Col>
      </Styled.MyForm>
    </Styled.Admin>
  );
};
