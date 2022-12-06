import React from "react";
import styled from 'styled-components'

export default function Header() {
    return (
        <Container>
            CINEFLEX
        </Container>
    )
}

const Container = styled.div`
    max-width: 375px;
    height: 67px;
    background: #C3CFD9;
    color: #E8833A;
    font-size: 34px;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;

`