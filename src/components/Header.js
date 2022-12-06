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
    height: 67px;
    background: #C3CFD9;
    color: #E8833A;
    font-size: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
`