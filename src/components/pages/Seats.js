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
        <Container>
            <div>
                {listSeats.seats.map(s => <Link to="/success" key={s.id}><button>{s.name}</button></Link>)}
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
        </Container>
    )
}

const Container = styled.div`
    margin: 0 22px 117px 22px;

    button{
        width: 26px;
        height: 26px;
        justify-content: center;
        align-items: center;
        background: #C3CFD9;
        border: 1px solid #808F9D;
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
`