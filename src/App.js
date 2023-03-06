import styled from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Favourate from "./Components/Balloon";
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
function App() {
  return (
    <Container>
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/favourate" element={<Favourate />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
