import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

export default function Seats({ setSuccess, choice, setChoice }) {
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
        res.then(res => { setSuccess(true) })
        res.catch(err => console.log(err.res.data))
    }
    if (listSeats.length === 0) {
        return <p>Loading...</p>;
    }
    return (
        <Container >
            <div>
                {listSeats.seats.map(s => <ContainerSeats key={s.id} available={s.isAvailable} selected={listSelected[s.name - 1]} onClick={() => {
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
                <input onChange={(e) => setChoice(existingValues => ({ ...existingValues, buyer: e.target.value }))} placeholder="Digite seu nome..."></input>
                <p>CPF do comprador:</p>
                <input onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()} onChange={(e) => setChoice(existingValues => ({ ...existingValues, document: e.target.value }))} placeholder="Digite seu CPF..."></input>
            </ContainerInputs>
            <LinkReserve to="/sucesso"><ContainerButton onClick={() => reserveSeats()} disabled={((choice.buyer === '' || choice.document.length !== 11 || choice.seats.length === 0) && true)
            }>Reservar assento(s)</ContainerButton></LinkReserve>
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
const ContainerSeats = styled.button`
    background: ${props => props.available ? '#C3CFD9' : '#FBE192'};
    background: ${props => props.selected && '#1AAE9E'};
    border: ${props => props.available ? '1px solid #808F9D' : '1px solid #F7C52B'};
    border: ${props => props.selected && '1px solid #0E7D71'};
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

const ContainerInputs = styled.div`
    display: flex;
    flex-direction: column;
    margin: 50px 0px;
    color: #293845;
    font-size: 18px;
    width: 100%;

    input{
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        width: 100%;
        height: 51px;
        margin-bottom: 7px;
        font-size: 18px;
        padding-left: 10px;
    }

    input::placeholder{
        font-size: 18px;
        font-style: italic;
        color: #AFAFAF;
        padding-left: 10px;
    }
`

const ContainerButton = styled.button`
    background: #E8833A;
    border: none;
    text-decoration: none;
    border-radius: 3px;
    margin: auto auto 30px auto;
    width: 225px;
    height: 42px;
    cursor: pointer;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    color:#FFFFFF;
`

const LinkReserve = styled(Link)`
    text-decoration: none;
`