import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

export default function Sessions({ setChoice }) {
    const { idFilme } = useParams();
    const [listSessions, setListSessions] = useState([]);
    useEffect(() => {
        const res = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`);
        res.then(res => setListSessions(res.data.days))
        res.catch(err => console.log(err.res.data))
    }, [idFilme]);

    if (listSessions.length === 0) {
        return <p>Loading...</p>;
    }
    return (
        <Container>
            {listSessions.map(s =>
                <ContainerSession key={s.id}>
                    <p>{s.weekday} - {s.date}</p>
                    <div>
                        {s.showtimes.map(t => <Link key={t.id} to={`/assentos/${t.id}`}><button onClick={() => {
                            setChoice(existingValues => ({ ...existingValues, day: s, session: t }))
                        }}>{t.name}</button></Link>)}
                    </div>
                </ContainerSession>)}
        </Container>
    )
}

const Container = styled.div`
    font-size: 20px;
    color: #293845;
    margin-left: 25px;
    margin-bottom: 117px;
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
