import styled, { keyframes } from "styled-components";
import gh from "../../images/gh-8.jpg";

export const Div = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  background-image: url(${gh});
  @media screen and (max-width: 1200px) {
    background-size: cover;
  }
`;

const text = keyframes`
  0% {
    content: "F";
  }
  5.88% {
    content: "Fd";
  }
  11.76% {
    content: "F";
  }
  17.64% {
    content: "Fs";
  }
  23.52% {
    content: "F";
  }
  29.40% {
    content: "Fr";
  }
  35.28% {
    content: "Fro";
  }
  41.16% {
    content: "Fron";
  }
  47.04% {
    content: "Front";
  }
  52.92% {
    content: "Fronted ";
  }
  58.80% {
    content: "Fronted   D";
  }
  64.68% {
    content: "Fronted   De";
  }
  70.56% {
    content: "Fronted   Dev";
  }
  76.44% {
    content: "Fronted   Deve";
  }
  82.32% {
    content: "Fronted   Devel";
  }
  88.20% {
    content: "Fronted   Develo";
  }
  94.08% {
    content: "Fronted   Develop";
  }
  100% {
    content: "Fronted   Developer";
  }
`;

export const Text = styled.p`
  font-size: 30px;

  @media screen and (min-width: 768px) {
    font-size: 50px;
    margin-right: 20px;
  }
`;

export const TextVerb = styled.p`
  font-size: 30px;

  @media screen and (min-width: 768px) {
    font-size: 50px;
  }
`;
export const TextAnim = styled.span`
  font-family: "GreyQo-Regular";
  position: relative;
  font-size: 70px;
  &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: 0px;
    display: inline;
    width: 500px;
    animation: ${text} 3.5s linear 1;
    animation-fill-mode: forwards;

    @media screen and (min-width: 768px) {
      top: -70px;
      left: 20px;
      font-size: 100px;
    }
  }
`;
export const Button = styled.button`
  padding: 12px 20px;
  background-color: #fff;
  border-radius: 30px;
  border-color: transparent;
  width: 300px;
`;

export const Wrapper = styled.div`
  @media screen and (min-width: 1440px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
export const WrapperText = styled.div`
  width: 100%;
  height: 180px;
  @media screen and (min-width: 768px) {
    height: auto;
    display: flex;
    justify-content: start;
    align-items: center;
  }
`;
