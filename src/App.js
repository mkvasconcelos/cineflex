import React, { useState } from "react";
import GlobalStyle from "./components/globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Movies from "./components/pages/Movies";
import Sessions from "./components/pages/Sessions";
import Seats from "./components/pages/Seats";
import Success from "./components/pages/Success";
import Footer from "./components/Footer";

export default function App() {
  const [choice, setChoice] = useState({
    movie: "",
    day: "",
    session: "",
    seats: [],
    buyer: "",
    document: "",
    success: false,
  });

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <SubHeader />
        <Routes>
          <Route path="/" element={<Movies setChoice={setChoice} />} />
          <Route
            path="/sessoes/:idFilme"
            element={<Sessions setChoice={setChoice} />}
          />
          <Route
            path="/assentos/:idSessao"
            element={<Seats choice={choice} setChoice={setChoice} />}
          />
          <Route
            path="/sucesso"
            element={<Success setChoice={setChoice} choice={choice} />}
          />
        </Routes>
        <Footer choice={choice} />
      </BrowserRouter>
    </>
  );
}
