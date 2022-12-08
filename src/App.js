import React, { useState } from "react";
import GlobalStyle from "./components/globalStyles"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Movies from "./components/pages/Movies";
import Sessions from "./components/pages/Sessions";
import Seats from "./components/pages/Seats";
import Footer from "./components/Footer";

export default function App() {
  const [chosenMovie, setChosenMovie] = useState("");
  const [chosenDay, setChosenDay] = useState("");
  const [chosenSession, setChosenSession] = useState("");

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <SubHeader text={chosenMovie === "" ? "Selecione o filme" : chosenDay === "" ? "Selecione o horário" : "Selecione o(s) assento(s)"} />
        <Routes>
          <Route path="/" element={<Movies setChosenMovie={setChosenMovie} />} />
          <Route path="/sessions/:movieId" element={<Sessions setChosenDay={setChosenDay} setChosenSession={setChosenSession} />} />
          <Route path="/seats/:sessionId" element={<Seats />} />
        </Routes>
        <Footer chosenMovie={chosenMovie} chosenDay={chosenDay} chosenSession={chosenSession} />
      </BrowserRouter>
    </>
  );
};

