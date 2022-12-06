import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function Movies() {
    const [listMovies, setListMovies] = useState([]);
    useEffect(() => {
        async function getMovies() {
            const url = 'https://mock-api.driven.com.br/api/v8/cineflex/movies';
            try {
                const res = await axios.get(url);
                console.log(res.data);
                setListMovies(res.data);
            } catch (error) {
                console.log(error)
            }
        }
        getMovies();
    }, []
    )
    return (
        <Container>
            {listMovies.map(i => <img src={i.posterURL} key={i.id}></img>)}
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

