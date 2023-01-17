import { Styled } from "./App.styles";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./containers/home/home";
import { Books } from "./containers/books/books";
import { useFetchBooksAndUsers } from "./hooks/custom-hooks";
import { createContext } from "react";
import { Header } from "./components/header/header";
import {Admin} from './containers/admin/admin'
export const UsersAndBooks = createContext<any>({});
const App = () => {
  const [books, users] = useFetchBooksAndUsers();
  return (
    <Styled.App>
      <Styled.BeneathHome>
        <Header />
        <UsersAndBooks.Provider value={{ users, books }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Books" element={<Books />} />
              <Route path="/Admin" element={<Admin />} />
            </Routes>
          </BrowserRouter>
        </UsersAndBooks.Provider>
      </Styled.BeneathHome>
    </Styled.App>
  );
};

export default App;
