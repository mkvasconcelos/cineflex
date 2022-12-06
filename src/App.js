import React from "react";
import Header from "./components/Header";
import GlobalStyle from "./components/globalStyles"
import Pages from "./components/Pages";

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Pages />
    </div>
  );
};

