import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

export default function Movies({ chosenMovie }) {
    const [listSessions, setListSessions] = useState([]);
    console.log(listSessions);
    function getSessionsMovie() {
        const res = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${chosenMovie}/showtimes`);
        res.then(res => setListSessions(res.data))
        res.catch(err => console.log(err.res.data))
    }
    getSessionsMovie()
    return (
        <Container>
            <div>
                <p>Quinta-feira</p>
                <div>
                    <button>15:00</button>
                    <button>19:00</button>
                </div>
            </div>
            <Link to="/movies">Movies</Link>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 20px;

    img{
        width: 129px;
        height: 193px;
        margin: 18px;
        cursor: pointer;
    }
`
