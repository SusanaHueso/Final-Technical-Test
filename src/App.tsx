import { Styled } from "./App.styles";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./containers/home/home";
import { Books } from "./containers/books/books";
import api from "./services/api";
import { useEffect, useState, createContext } from "react";
export const UsersAndBooks = createContext<any>({});
const App = () => {
  // states to save users and books and using usecontext pass it to components when necesarry
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
  // updates the setters, use it then when api POSTS or UPDATES
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
      <UsersAndBooks.Provider value={{ users, books }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Books" element={<Books />} />
          </Routes>
        </BrowserRouter>
      </UsersAndBooks.Provider>
    </Styled.App>
  );
};

export default App;
