import React from "react";
import styled from 'styled-components'

export default function SubHeader({ text }) {
    return (
        <Container>
            {text}
        </Container>
    )
}

const Container = styled.div`
    max-width: 375px;
    height: 110px;
    color: #293845;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
`