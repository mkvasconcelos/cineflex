import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Movies({ setChosenMovie }) {
    const [listMovies, setListMovies] = useState([]);
    useEffect(() => {
        const res = axios.get('https://mock-api.driven.com.br/api/v8/cineflex/movies');
        res.then(res => setListMovies(res.data))
        res.catch(err => console.log(err.res.data))
    }, []);

    if (listMovies.length === 0) {
        return <p>Loading...</p>;
    }
    return (
        <Container>
            {listMovies.map(i => <Link to={`/sessions/${i.id}`} key={i.id} onClick={() => { setChosenMovie(i) }}><img src={i.posterURL} key={i.id} alt={i.title}></img></Link>)}
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

