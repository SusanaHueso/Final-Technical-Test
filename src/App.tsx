import { Styled } from "./App.styles";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./containers/home/home";
import { Books } from "./containers/books/books";

import { createContext } from "react";
import { Header } from "./components/header/header";
import { Admin } from "./containers/admin/admin";
import { useState, useEffect } from "react";
import api from "./services/api";
export const UsersAndBooks = createContext<any>({});
const App = () => {
  // states to save users and books
  const [users, setUsers] = useState<any[]>([]);
  const [books, setBooks] = useState<any[]>([]);

  // Api getters
  const retrieveUsers = async () => {
    const responseUsers = await api.get<string[]>("/users");
    return responseUsers;
  };
  const retrieveBooks = async () => {
    const responseBooks = await api.get("/books");
    return responseBooks;
  };
  // updates the setters
  useEffect(() => {
    const getAllUsers = async () => {
      const allUsers = await retrieveUsers();
      if (allUsers) setUsers(allUsers.data);
    };
    getAllUsers();

    const getAllBooks = async () => {
      const allBooks = await retrieveBooks();
      if (allBooks) setBooks(allBooks.data);
    };

    getAllBooks();
  }, []);

  return (
    <Styled.App>
      <Styled.BeneathHome>
        <Header />
        <Styled.LineBorder>
          <UsersAndBooks.Provider value={{ users, books, setBooks }}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Books" element={<Books />} />
                <Route path="/Admin" element={<Admin />} />
              </Routes>
            </BrowserRouter>
          </UsersAndBooks.Provider>
        </Styled.LineBorder>
      </Styled.BeneathHome>
    </Styled.App>
  );
};

export default App;
