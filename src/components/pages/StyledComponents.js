import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerButton = styled.button`
  background: #e8833a;
  border: none;
  text-decoration: none;
  border-radius: 3px;
  margin: auto auto 30px auto;
  width: 225px;
  height: 42px;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`;

export const ContainerLink = styled(Link)`
  text-decoration: none;
`;

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0px;
  color: #293845;
  font-size: 18px;
  width: 100%;
  input {
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 3px;
    width: 100%;
    height: 51px;
    margin-bottom: 7px;
    font-size: 18px;
    padding-left: 10px;
  }
  input::placeholder {
    font-size: 18px;
    font-style: italic;
    color: #afafaf;
    padding-left: 10px;
  }
`;

export const ContainerSeats = styled.button`
  background: ${(props) => (props.available ? "#C3CFD9" : "#FBE192")};
  background: ${(props) => props.selected && "#1AAE9E"};
  border: ${(props) =>
    props.available ? "1px solid #808F9D" : "1px solid #F7C52B"};
  border: ${(props) => props.selected && "1px solid #0E7D71"};
`;
