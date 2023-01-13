import { Styled } from "./App.styles";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./containers/home/home";
import { Books } from "./containers/books/books";
import api from "./services/api";
import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
const App = () => {
  const [users, setUsers] = useState<string[]>([]);

  const [books, setBooks] = useState<AxiosResponse | null | void>(null);
  //retrieves from the api
  const retrieveUsers = async () => {
    const responseUsers = await api.get<string[]>("/users");
    return responseUsers;
  };
  /*const retrieveBooks = async () => {
    const responseBooks = await api.get("/books");
    return responseBooks;
  };*/

  useEffect(() => {
    const getAllUsers = async () => {
      const allUsers = await retrieveUsers();
      if (allUsers) setUsers(allUsers.data);
    };
    getAllUsers();
    /*
    const getAllBooks = async () => {
      const allBooks = await retrieveBooks();
      if (allBooks) setUsers(allBooks);
    };

    getAllBooks();*/
  }, []);
  setTimeout(() => {
    console.log(users);
  }, 200);
  return (
    <Styled.App>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Books" element={<Books />} />
        </Routes>
      </BrowserRouter>
    </Styled.App>
  );
};

export default App;
