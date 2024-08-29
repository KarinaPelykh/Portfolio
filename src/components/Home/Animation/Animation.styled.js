import styled, { keyframes } from "styled-components";

export const Section = styled.section`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-x: hidden;
`;
const e = keyframes`
from{ transform:translateX(0)}
to{
   transform:translateX(100%)
}`;
export const Text = styled.p`
  margin-right: 40px;
  font-size: 70px;

  animation: ${e} 20s linear 1;
  animation-iteration-count: infinite;
  @media screen and (min-width: 1024px) {
    font-size: 150px;
  }
`;
