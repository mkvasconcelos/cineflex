import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import {
  ContainerButton,
  ContainerInputs,
  ContainerSeats,
} from "./StyledComponents";

export default function Seats({ choice, setChoice }) {
  const { idSessao } = useParams();
  const [listSeats, setListSeats] = useState([]);
  const [listSelected, setListSelected] = useState([]);
  const [listSeatsId, setListSeatsId] = useState([]);
  const navigate = useNavigate();
  const [state, setState] = useState({});
  useEffect(() => {
    const res = axios.get(
      `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`
    );
    res.then((res) => {
      setListSeats(res.data);
    });
    res.catch((err) => console.log(err.res.data));
  }, [idSessao]);
  function getSeats(seat, available, seatNumber) {
    if (!available) {
      alert("Esse assento não está disponível");
      return;
    }
    if (choice.seats.includes(seatNumber)) {
      const newChosenSeats = [...choice.seats];
      const newChosenSeatsId = [...listSeatsId];
      newChosenSeats.splice(choice.seats.indexOf(seatNumber), 1);
      newChosenSeatsId.splice(listSeatsId.indexOf(seat), 1);
      setChoice((existingValues) => ({
        ...existingValues,
        seats: newChosenSeats,
      }));
      setListSeatsId(newChosenSeatsId);
      const newListSelected = [...listSelected];
      newListSelected[seatNumber - 1] = false;
      setListSelected(newListSelected);
    } else {
      const newChosenSeats = [...choice.seats, seatNumber];
      const newChosenSeatsId = [...listSeatsId, seat];
      setChoice((existingValues) => ({
        ...existingValues,
        seats: newChosenSeats,
      }));
      setListSeatsId(newChosenSeatsId);
      const newListSelected = [...listSelected];
      newListSelected[seatNumber - 1] = true;
      setListSelected(newListSelected);
    }
  }
  function reserveSeats(e) {
    e.preventDefault();
    if (choice.seats.length === 0) {
      alert("Escolha pelo menos um assento.");
      return;
    }
    const compradores = choice.seats.map((s, i) => ({
      idAssento: listSeatsId[i],
      nome: e.target[`${s}buyer`].value,
      cpf: e.target[`${s}document`].value,
    }));
    const newBuyer = [...choice.buyer];
    choice.seats.map((s) =>
      newBuyer.push({
        name: e.target[`${s}buyer`].value,
        document: e.target[`${s}document`].value,
      })
    );
    setChoice((ev) => ({ ...ev, buyer: newBuyer }));
    const payload = {
      ids: listSeatsId,
      compradores: compradores,
    };
    const res = axios.post(
      `https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many`,
      payload
    );
    res.then(() => {
      navigate("/sucesso");
      setChoice((ev) => ({ ...ev, success: true }));
    });
    res.catch((err) => console.log(err.res.data));
  }
  function handleChange(e) {
    setState({ [e.target.name]: e.target.value });
  }
  if (listSeats.length === 0) {
    return (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
        alt="loading-gif"
      ></img>
    );
  }
  return (
    <Container>
      <div>
        {listSeats.seats.map((s) => (
          <ContainerSeats
            data-test="seat"
            key={s.id}
            available={s.isAvailable}
            selected={listSelected[s.name - 1]}
            onClick={() => {
              getSeats(s.id, s.isAvailable, s.name);
            }}
          >
            {s.name}
          </ContainerSeats>
        ))}
      </div>
      <ContainerButtons>
        <div>
          <button></button>
          <p>Selecionado</p>
        </div>
        <div>
          <button></button>
          <p>Disponível</p>
        </div>
        <div>
          <button></button>
          <p>Indisponível</p>
        </div>
      </ContainerButtons>
      <form onSubmit={reserveSeats}>
        <ContainerInputs>
          {choice.seats.map((s) => (
            <div key={s}>
              <label>Nome do comprador:</label>
              <input
                data-test="client-name"
                type="text"
                name={`${s}buyer`}
                onChange={handleChange}
                value={state[`${s}buyer`]}
                placeholder="Digite seu nome..."
                required
              ></input>
              <label>CPF do comprador:</label>
              <input
                data-test="client-cpf"
                type="text"
                pattern="[0-9]{11}"
                name={`${s}document`}
                onChange={handleChange}
                value={state[`${s}document`]}
                placeholder="Digite seu CPF..."
                required
              ></input>
            </div>
          ))}
        </ContainerInputs>
        <ContainerButton data-test="book-seat-btn" type="submit" value="Submit">
          Reservar assento(s)
        </ContainerButton>
      </form>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 22px 117px 22px;
  display: flex;
  flex-direction: column;
  div button {
    width: 26px;
    height: 26px;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 12px;
    color: #000000;
    font-size: 11px;
    cursor: pointer;
    margin: 9px 3.5px 9px 3.5px;
  }
`;
const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 13px;
    color: #4e5a65;
  }
  div:nth-child(2) {
    margin: 0 30px;
  }
  div:nth-child(1) button {
    background: #1aae9e;
    border: 1px solid #0e7d71;
  }
  div:nth-child(2) button {
    background: #c3cfd9;
    border: 1px solid #808f9d;
  }
  div:nth-child(3) button {
    background: #fbe192;
    border: 1px solid #f7c52b;
  }
`;
