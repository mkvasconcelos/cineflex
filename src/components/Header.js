import React from "react";
import styled from 'styled-components';
import { BsArrowLeft } from 'react-icons/bs';
import { useLocation, useNavigate } from "react-router-dom";

export default function Header({ setChoice }) {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <Container>
            <div data-test="go-home-btn" onClick={() => { navigate('../'); setChoice({ movie: "", day: "", session: "", seats: [], buyer: "", document: "", success: false }) }}>
                {location.pathname !== "/" && <BsArrowLeft />}
            </div>
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

    div{
        position: absolute;
        left: 10px;
        top: 15px;
        font-size: 37px;
        color: black;
        cursor: pointer;
    }
`