import { Styled } from "./App.styles";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./containers/home/home";

import { createContext, useEffect, useState } from "react";
import { Header } from "./components/header/header";
import { Admin } from "./containers/admin/admin";

import { retrieveBooks, retrieveUsers } from "./services/api";
import { Login } from "./containers/login/login";
import { UserProfile } from "./containers/user-profile/user-profile";
import { BooksWrapper } from "./containers/books/books-wrapper";
export const UsersAndBooks = createContext<any>({});

const App = () => {
  const [user, setUser] = useState<any>();
  const [showName, setShowName] = useState("");

  // states to save users and books
  const [users, setUsers] = useState<any[]>([]);
  const [books, setBooks] = useState<any[]>([]);

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
    <UsersAndBooks.Provider
      value={{
        users,
        books,
        setBooks,
        setUsers,
      }}
    >
      <Styled.App>
        <Styled.BeneathHome>
          <Header showName={showName} />
          <Styled.LineBorder>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/Login"
                  element={<Login setShowName={setShowName} />}
                />
                <Route path="/Books" element={<BooksWrapper />} />
                <Route path="/Admin" element={<Admin />} />
                <Route path="/UserProfile" element={<UserProfile />} />
                <Route path="/Home" element={<Home />} />
              </Routes>
            </BrowserRouter>
          </Styled.LineBorder>
        </Styled.BeneathHome>
      </Styled.App>
    </UsersAndBooks.Provider>
  );
};

export default App;
