import styled, { keyframes } from "styled-components";

export const Div = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
`;
export const Section = styled.section`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
const text = keyframes`

0% {
    content: "F";
  }
  8% {
    content: "Fd";
  }10% {
    content: "F";
  }
  15% {
    content: "Fs";
  }
  19% {
    content: "F";
  }
    20% {
    content: "Fr";
  }
  25% {
    content: "Fro";
  }
  30% {
    content: "Fron";
  }
  40% {
    content: "Front";
  }
  54% {
    content: "Fronted ";
  }

  68% {
    content: "Fronted   D";
  }
  69% {
    content: "Fronted   De";
  }
  72% {
    content: " Fronted   Dev";
  }
 76% {
    content: "Fronted   Deve";
  }
  80% {
    content: "Fronted   Devel";
  }
  94% {
    content: "Fronted   Develo";
  }
 96%{
    content: "Fronted   Develop";
  } 98% {
    content: "Fronted   Develope";
  }100% {
    content: "Fronted   Developer";
  }
 
`;
export const Text = styled.p`
  font-size: 50px;
  margin-right: 20px;
`;
export const TextAnim = styled.span`
  font-size: 100px;
  height: 100px;
  width: 500px;
  font-family: "GreyQo-Regular";
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 10px;
    left: 0;
    display: block;
    width: 100%;
    animation: ${text} 7.5s linear 1;
    animation-fill-mode: forwards;
  }
`;
export const Button = styled.button`
  padding: 12px 20px;
  background-color: #fff;
  border-radius: 30px;
  border-color: transparent;
  width: 300px;
`;
