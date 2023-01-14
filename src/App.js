import React from 'react'
import { Routes, Route } from "react-router-dom";
import { MegaContainer, Container } from "./styles";
import Home from "./pages/Home/";
import Contact from "./pages/Contact/";

function App() {
  return (
    <MegaContainer>
      <Container>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/contactme" exact element={<Contact />} />
        </Routes>
      </Container>
    </MegaContainer>
  );
}

export default App;
