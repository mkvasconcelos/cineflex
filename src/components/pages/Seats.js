import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

export default function Sessions() {
    const { sessionId } = useParams();
    const [listSeats, setListSeats] = useState([]);

    useEffect(() => {
        const res = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${sessionId}/seats`);
        res.then(res => setListSeats(res.data))
        res.catch(err => console.log(err.res.data))
    }, []);

    if (listSeats.length === 0) {
        return <p>Loading...</p>;
    }

    return (
        <Container >
            <div>
                {listSeats.seats.map(s => <Seats key={s.id} available={s.isAvailable} onClick={() => 'selected'} disabled={!s.isAvailable}>{s.name}</Seats>)}
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
                <input placeholder="Digite seu nome..."></input>
                <p>CPF do comprador:</p>
                <input placeholder="Digite seu CPF..."></input>
            </ContainerInputs>
            <Link to="/success"><ReserveButton>Reservar assento(s)</ReserveButton></Link>
        </Container >
    )
}

const Container = styled.div`
    margin: 0 22px 117px 22px;
    display: flex;
    flex-direction: column;

    button{
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
const Seats = styled.button`
    background: ${props => props.available ? '#C3CFD9' : '#FBE192'};
    background: ${props => props.available === 'selected' && '1AAE9E'};
    border: ${props => props.available ? '1px solid #808F9D' : '1px solid #F7C52B'};
    border: ${props => props.available === 'selected' && '1px solid #F7C52B'};
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
    margin: 50px 23px;
    color: #293845;
    font-size: 18px;

    input{
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        width: 327px;
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

const ReserveButton = styled.div`
    background: #E8833A;
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