import React from "react";
import styled from 'styled-components'
import { useLocation } from "react-router-dom";

export default function Footer({ choice }) {
    const location = useLocation();
    if (location.pathname === "/" || location.pathname.includes("/sucesso")) return;
    const session = choice.day === "" ? "" : `${choice.day.weekday} - ${choice.session.name}`;
    const { posterURL, title } = choice.movie;
    return (
        <Container>
            <div>
                <img src={posterURL} alt={title}></img>
            </div>
            <div>
                <p>{title}</p>
                <p>{session}</p>
            </div>
        </Container>
    )
}

const Container = styled.div`
    height: 117px;
    width: 100%;
    background: #DFE6ED;
    border: 1px solid #9EADBA;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;

    div:first-child{
        width: 64px;
        height: 89px;
        background: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
        margin-left: 10px;
    }

    div:nth-child(2){
        margin-left: 15px;
    }

    p{
        font-size: 26px;
        color: #293845;
    }
    
    img{
        width: 48px;
        height: 72px;
    }
`