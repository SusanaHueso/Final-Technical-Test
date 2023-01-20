import { Styled } from "./App.styles";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./containers/home/home";
import { Books } from "./containers/books/books";

import { createContext } from "react";
import { Header } from "./components/header/header";
import { Admin } from "./containers/admin/admin";
import { useState, useEffect } from "react";
import api from "./services/api";
import { Login } from "./containers/login/login";
import { UserProfile } from "./containers/user-profile/user-profile";
import { BooksWrapper } from "./containers/books/books-wrapper";
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
  }, [users, books]);

  return (
    <Styled.App>
      <Styled.BeneathHome>
        <Header />
        <Styled.LineBorder>
          <UsersAndBooks.Provider
            value={{
              users,
              books,
              setBooks,
              setUsers,
            }}
          >
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Books" element={<BooksWrapper />} />
                <Route path="/Admin" element={<Admin />} />
                <Route path="/UserProfile" element={<UserProfile />} />
              </Routes>
            </BrowserRouter>
          </UsersAndBooks.Provider>
        </Styled.LineBorder>
      </Styled.BeneathHome>
    </Styled.App>
  );
};

export default App;
