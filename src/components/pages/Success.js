import React from "react";
import styled from "styled-components";
import { ContainerButton, ContainerLink } from "./StyledComponents";

export default function Success({ setChoice, choice }) {
  const { movie, day, session, seats, buyer } = choice;
  if (!choice.success) {
    return (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
        alt="loading-gif"
      ></img>
    );
  }
  return (
    <Container>
      <div data-test="movie-info">
        <h1>Filme e sessão</h1>
        <p>{movie.title}</p>
        <p>
          {day.date} {session.name}
        </p>
      </div>
      <div data-test="seats-info">
        <h1>Ingressos</h1>
        {seats.map((s) => (
          <p key={s}>Assento {s}</p>
        ))}
      </div>
      <div data-test="client-info">
        <h1>Comprador</h1>
        {buyer.map((b) => (
          <div>
            <p>Nome: {b.name}</p>
            <p>
              CPF:{" "}
              {b.document.replace(
                /(\d{3})(\d{3})(\d{3})(\d{2})/g,
                "$1.$2.$3-$4"
              )}
            </p>
          </div>
        ))}
      </div>
      <ContainerLink
        to="/"
        data-test="go-home-btn"
        onClick={() => {
          setChoice({
            movie: "",
            day: "",
            session: "",
            seats: [],
            buyer: [],
            success: false,
          });
        }}
      >
        <ContainerButton>Voltar para Home</ContainerButton>
      </ContainerLink>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 22px 117px 22px;
  font-size: 22px;
  color: #293845;

  div {
    margin-bottom: 30px;
  }
  h1 {
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 10px;
  }
  p {
    margin-bottom: 5px;
  }
`;
