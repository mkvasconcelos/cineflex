import React, { useState } from "react";
import GlobalStyle from "./components/globalStyles"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Movies from "./components/pages/Movies";
import Sessions from "./components/pages/Sessions";
import Seats from "./components/pages/Seats";
import Success from "./components/pages/Success";
import Footer from "./components/Footer";

export default function App() {
  const [chosenMovie, setChosenMovie] = useState("");
  const [chosenDay, setChosenDay] = useState("");
  const [chosenSession, setChosenSession] = useState("");
  const [chosenSeats, setChosenSeats] = useState([]);
  const [buyer, setBuyer] = useState("");
  const [document, setDocument] = useState("");
  const [success, setSuccess] = useState(false);

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <SubHeader />
        <Routes>
          <Route path="/" element={<Movies setChosenMovie={setChosenMovie} />} />
          <Route path="/sessoes/:idFilme" element={<Sessions setChosenDay={setChosenDay} setChosenSession={setChosenSession} />} />
          <Route path="/assentos/:idSessao" element={<Seats buyer={buyer} setBuyer={setBuyer} document={document} setDocument={setDocument} chosenSeats={chosenSeats} setChosenSeats={setChosenSeats} setSuccess={setSuccess} />} />
          <Route path="/sucesso" element={<Success setChosenMovie={setChosenMovie} chosenMovie={chosenMovie} setChosenDay={setChosenDay} chosenDay={chosenDay} setChosenSession={setChosenSession} chosenSession={chosenSession} setChosenSeats={setChosenSeats} chosenSeats={chosenSeats} setBuyer={setBuyer} buyer={buyer} setDocument={setDocument} document={document} success={success} />} />
        </Routes>
        <Footer chosenMovie={chosenMovie} chosenDay={chosenDay} chosenSession={chosenSession} chosenSeats={chosenSeats} />
      </BrowserRouter>
    </>
  );
};

