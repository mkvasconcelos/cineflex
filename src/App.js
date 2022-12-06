import React from "react";
import Header from "./components/Header";
import GlobalStyle from "./components/globalStyles"
import SubHeader from "./components/SubHeader";
import Movies from "./components/pages/Movies";

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <SubHeader text={"Selecione o filme"} />
      <>
        <Movies />
      </>
    </div>
  );
};