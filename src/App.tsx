import { Styled } from "./App.styles";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./containers/home/home";
function App() {
  return (
    <Styled.App>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Styled.App>
  );
}

export default App;
