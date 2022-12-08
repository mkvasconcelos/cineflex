import React from "react";
import styled from "styled-components";
import { ContainerButton, ContainerLink } from "./StyledComponents";

export default function Success({ setChoice, choice }) {
    const { title } = choice.movie;
    if (!choice.success) {
        return <p>Loading...</p>;
    }

    return (
        <Container >
            <div>
                <h1>Filme e sessão</h1>
                <p>{title}</p>
                <p>{choice.day.date} {choice.session.name}</p>
            </div>
            <div>
                <h1>Ingressos</h1>
                {choice.seats.map(s => <p key={s}>Assento {s}</p>)}
            </div>
            <div>
                <h1>Comprador</h1>
                <p>Nome: {choice.buyer}</p>
                <p>CPF: {choice.document.slice(0, 3) + "." + choice.document.slice(3, 6) + "." + choice.document.slice(6, 9) + "-" + choice.document.slice(9, 11)}</p>
            </div>
            <ContainerLink to="/" onClick={() => { setChoice({ movie: "", day: "", session: "", seats: [], buyer: "", document: "", success: false }) }}><ContainerButton>Voltar para Home</ContainerButton></ContainerLink>
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