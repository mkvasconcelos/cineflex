import React from "react";
import Header from "./components/Header";
import GlobalStyle from "./components/globalStyles"
import SubHeader from "./components/SubHeader";

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <SubHeader text={"Selecione o filme"} />
    </div>
  );
};