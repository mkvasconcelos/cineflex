import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

export default function SubHeader() {
  const location = useLocation();
  return (
    <Container success={location.pathname.includes("/sucesso")}>
      {location.pathname === "/"
        ? "Selecione o filme"
        : location.pathname.includes("/sessoes")
        ? "Selecione o horário"
        : location.pathname.includes("/assentos")
        ? "Selecione o(s) assento(s)"
        : "Pedido feito com sucesso!"}
    </Container>
  );
}

const Container = styled.div`
  height: 110px;
  color: ${(props) => (props.success ? "#247A6B" : "#293845")};
  font-size: 24px;
  font-weight: ${(props) => props.success && "700"};
  display: flex;
  justify-content: center;
  align-items: center;
`;
