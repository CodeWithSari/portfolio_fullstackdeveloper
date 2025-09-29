import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import 'aos/dist/aos.css';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Header />
      <Container
  sx={{
    minHeight: "80vh",
    mt: 4,
    backgroundColor: "background.default", // #121212
    color: "text.primary",
    pb: 5,
  }}
>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
