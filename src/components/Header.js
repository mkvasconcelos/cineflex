import React from "react";
import styled from 'styled-components';
import { BsArrowLeft } from 'react-icons/bs';
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    const { idFilme } = useParams();
    console.log(idFilme);
    return (
        <Container>
            <div data-test="go-home-btn" onClick={() => navigate('../')}>
                {location.pathname !== "/" && <BsArrowLeft />}
            </div>
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

    div{
        position: fixed;
        left: 10px;
        top: 15px;
        font-size: 37px;
        color: black;
        cursor: pointer;
    }
`