import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Movies({ listMovies, setChosenMovie }) {
    return (
        <Container>
            {listMovies.map(i => <Link to="/sessions" key={i.id} onClick={() => setChosenMovie(i.id)}><img src={i.posterURL} key={i.id} alt={i.title}></img></Link>)}
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

