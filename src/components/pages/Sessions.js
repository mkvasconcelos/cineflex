import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

export default function Sessions({ chosenMovie }) {
    const [listSessions, setListSessions] = useState([]);
    useEffect(() => {
        const res = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${chosenMovie}/showtimes`);
        res.then(res => setListSessions(res.data.days))
        res.catch(err => console.log(err.res.data))
    }, []);
    return (
        <Container>
            {listSessions.map(s =>
                <ContainerSession key={s.id}>
                    <p>{s.weekday} - {s.date}</p>
                    <div>
                        {s.showtimes.map(t => <button key={t.id}>{t.name}</button>)}
                    </div>
                </ContainerSession>)}
            <Link to="/movies">Movies</Link>
        </Container>
    )
}

const Container = styled.div`
    font-size: 20px;
    color: #293845;
    margin-left: 25px;
`

const ContainerSession = styled.div`
    button{
        width: 82px;
        height: 43px;
        background: #E8833A;
        border-radius: 3px;
        margin: 25px 8px 25px 0;
        color: #FFFFFF;
        font-size: 18px;
        border: none;
        cursor: pointer;
    }
`
