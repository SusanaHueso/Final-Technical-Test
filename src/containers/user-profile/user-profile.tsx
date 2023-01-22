import { useContext, useState } from "react";
import { Styled } from "./user-profile.styles";
import { Form, Button, Col, Card } from "react-bootstrap";
import { api } from "../../services/api";
import { UsersAndBooks } from "../../App";
import { useFetchUserLogged } from "../../hooks/custom-hooks";

export const UserProfile = () => {
  const { users, books, setBooks, setUsers } = useContext(UsersAndBooks);
  const [shouldDelete, setShouldDelete] = useState<any[]>([]);
  const { userLogged } = useFetchUserLogged();

  const markedForDeletion = (book: any) => {
    shouldDelete?.includes(book.id)
      ? setShouldDelete(shouldDelete.filter((item) => item !== book.id))
      : setShouldDelete((prevIds) => [...prevIds, book.id]);
  };

  const deleteUserBooksApi = async () => {
    //changes the favourite list
    const newList = userLogged?.Favouritebookslist?.filter(
      (book: any) => !shouldDelete?.includes(book.id)
    );

    userLogged.Favouritebookslist = newList;

    const response2 = await api.put(
      `/users/${sessionStorage.getItem("user")}`,
      {
        id: userLogged?.id,
        Name: userLogged?.Name,
        Surname: userLogged?.Surname,
        Email: userLogged?.Email,
        Password: userLogged?.Password,
        Favouritebookslist: userLogged?.Favouritebookslist,
      }
    );
    setUsers([...users, response2.data]);
    setShouldDelete([]);
  };

  return (
    <Styled.Admin>
      {userLogged === undefined ? (
        <div>Loading...Please Wait</div>
      ) : (
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
      )}
    </Styled.Admin>
  );
};
