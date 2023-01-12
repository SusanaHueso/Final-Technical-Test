import { Styled } from "./App.styles";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./containers/home/home";
import { Books } from "./containers/books/books";
function App() {
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
}

export default App;
