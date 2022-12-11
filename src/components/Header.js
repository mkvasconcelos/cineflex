import React from "react";
import styled from 'styled-components';
import { BsArrowLeft } from 'react-icons/bs';
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <Container>
            <button data-test="go-home-header-btn" onClick={() => { navigate(-1) }}>
                {location.pathname !== "/" && <BsArrowLeft />}
            </button>
            CINEFLEX
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 67px;
    background: #C3CFD9;
    color: #E8833A;
    font-size: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    button{
        position: absolute;
        left: 10px;
        top: 15px;
        font-size: 37px;
        color: black;
        cursor: pointer;
        background-color: transparent;
        border: none;
    }
`