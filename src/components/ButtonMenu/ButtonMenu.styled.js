import styled from "styled-components";

export const Button = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: center;

  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Svg = styled.svg`
  stroke: #fff;
  fill: #fff;
`;
