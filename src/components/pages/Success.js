import React from "react";
import styled from "styled-components";
import { ContainerButton, ContainerLink } from "./StyledComponents";

export default function Success({ setChoice, choice }) {
    const title = choice.movie.title;
    const day = choice.day.date;
    const session = choice.session.name;
    const seats = choice.seats;
    const buyer = choice.buyer;
    const document = choice.document;
    if (!choice.success) {
        return <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" alt="loading-gif"></img>
    }
    return (
        <Container >
            <div data-test="movie-info">
                <h1>Filme e sessão</h1>
                <p>{title}</p>
                <p>{day} {session}</p>
            </div>
            <div data-test="seats-info">
                <h1>Ingressos</h1>
                {seats.map(s => <p key={s}>Assento {s}</p>)}
            </div>
            <div data-test="client-info">
                <h1>Comprador</h1>
                <p>Nome: {buyer}</p>
                <p>CPF: {document.slice(0, 3) + "." + choice.document.slice(3, 6) + "." + choice.document.slice(6, 9) + "-" + choice.document.slice(9, 11)}</p>
            </div>
            <ContainerLink to="/" data-test="go-home-btn" onClick={() => { setChoice({ movie: "", day: "", session: "", seats: [], buyer: [], document: [], success: false }) }}><ContainerButton>Voltar para Home</ContainerButton></ContainerLink>
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