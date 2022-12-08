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
            {listMovies.map(i => <Link to={`/sessoes/${i.id}`} key={i.id} onClick={() => { setChosenMovie(i) }}><div><img src={i.posterURL} key={i.id} alt={i.title}></img></div></Link>)}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 20px 0 10px;

    div{
        width: 145px;
        height: 209px;
        background: #FFFFFF;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px 10px 10px 10px;
    }

    img{
        width: 129px;
        height: 193px;
        cursor: pointer;
    }
`

