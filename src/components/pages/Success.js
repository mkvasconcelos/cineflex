import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Success({ setChosenMovie, setChosenDay, setChosenSession, setChosenSeats, setBuyer, setDocument, chosenMovie, chosenDay, chosenSession, chosenSeats, buyer, document }) {
    const { title } = chosenMovie;
    if (chosenSeats.length === 0) {
        return <p>Loading...</p>;
    }
    return (
        <Container >
            <div>
                <h1>Filme e sessão</h1>
                <p>{title}</p>
                <p>{chosenDay.weekday} {chosenSession.name}</p>
            </div>
            <div>
                <h1>Ingressos</h1>
                {chosenSeats.map(s => <p>Assento {s}</p>)}
            </div>
            <div>
                <h1>Comprador</h1>
                <p>{buyer}</p>
                <p>{document}</p>
            </div>
            <ContainerLink to="/" onClick={() => { setChosenMovie(''); setChosenDay(''); setChosenSession(''); setChosenSeats([]); setBuyer(''); setDocument('') }}><ContainerButton>Voltar para Home</ContainerButton></ContainerLink>
        </Container >
    )
}

const Container = styled.div`
    margin: 0 22px 117px 22px;
    font-size: 22px;
    color: #293845;

    div{
        margin-bottom: 30px;
    }
    h1{
        font-weight: 700;
        font-size: 24px;
        margin-bottom: 10px;
    }
    p{
        margin-bottom: 5px;
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

const ContainerLink = styled(Link)`
    text-decoration: none;
`