import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { ContainerButton, ContainerLink, ContainerInputs, ContainerSeats } from "./StyledComponents";

export default function Seats({ choice, setChoice }) {
    const { idSessao } = useParams();
    const [listSeats, setListSeats] = useState([]);
    const [listSelected, setListSelected] = useState([]);
    useEffect(() => {
        const res = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`);
        res.then(res => { setListSeats(res.data); setListSelected(new Array(res.data.seats.length).fill(false)); })
        res.catch(err => console.log(err.res.data))
    }, [idSessao]);
    function getSeats(seat, available) {
        if (!available) { alert("Esse assento não está disponível"); return };
        if (choice.seats.includes(seat)) {
            const newChosenSeats = [...choice.seats]
            newChosenSeats.splice(choice.seats.indexOf(seat), 1);
            setChoice(existingValues => ({ ...existingValues, seats: newChosenSeats }));
            const newListSelected = [...listSelected];
            newListSelected[seat - 1] = false;
            setListSelected(newListSelected);
        } else {
            const newChosenSeats = [...choice.seats, seat];
            setChoice(existingValues => ({ ...existingValues, seats: newChosenSeats }));
            const newListSelected = [...listSelected];
            newListSelected[seat - 1] = true;
            setListSelected(newListSelected);
        }
    }
    function reserveSeats() {
        const payload = {
            ids: listSeats,
            name: choice.buyer,
            cpf: choice.document
        }
        const res = axios.post(`https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many`, payload);
        res.then(() => { setChoice(existingValues => ({ ...existingValues, success: true })) })
        res.catch(err => console.log(err.res.data))
    }
    if (listSeats.length === 0) {
        return <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" alt="loading-gif"></img>
    }
    return (
        <Container >
            <div>
                {listSeats.seats.map(s => <ContainerSeats data-test="seat" key={s.id} available={s.isAvailable} selected={listSelected[s.name - 1]} onClick={() => {
                    getSeats(s.name, s.isAvailable)
                }}>{s.name}</ContainerSeats>)}
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
            <ContainerInputs>
                <p>Nome do comprador:</p>
                <input data-test="client-name" onChange={(e) => setChoice(existingValues => ({ ...existingValues, buyer: e.target.value }))} placeholder="Digite seu nome..."></input>
                <p>CPF do comprador:</p>
                <input data-test="client-cpf" onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()} onChange={(e) => setChoice(existingValues => ({ ...existingValues, document: e.target.value }))} placeholder="Digite seu CPF..."></input>
            </ContainerInputs>
            <ContainerLink to="/sucesso"><ContainerButton data-test="book-seat-btn" onClick={() => reserveSeats()} disabled={((choice.buyer === '' || choice.document.length !== 11 || choice.seats.length === 0) && true)
            }>Reservar assento(s)</ContainerButton></ContainerLink>
        </Container >
    )
}

const Container = styled.div`
    margin: 0 22px 117px 22px;
    display: flex;
    flex-direction: column;
    div button{
        width: 26px;
        height: 26px;
        justify-content: center;
        align-items: center;
        border-radius: 12px;
        color: #000000;
        font-size: 11px;
        cursor: pointer;
        margin: 9px 3.5px 9px 3.5px;
    }
`
const ContainerButtons = styled.div`
    display: flex;
    justify-content: center;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 13px;
        color: #4E5A65;
    }
    div:nth-child(2){  
        margin: 0 30px;
    }
    div:nth-child(1) button{
        background: #1AAE9E;
        border: 1px solid #0E7D71;
    }
    div:nth-child(2) button{
        background: #C3CFD9;
        border: 1px solid #808F9D;
    }
    div:nth-child(3) button{
        background: #FBE192;
        border: 1px solid #F7C52B;
    }
`
