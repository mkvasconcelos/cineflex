import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function Movies() {
    const [listMovies, setListMovies] = useState([]);
    useEffect(() => {
        const res = axios.get('https://mock-api.driven.com.br/api/v8/cineflex/movies');
        res.then(res => setListMovies(res.data))
        res.catch(err => console.log(err.res.data))
    }, []);
    return (
        <Container>
            {listMovies.map(i => <img src={i.posterURL} key={i.id} alt={i.title}></img>)}
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

