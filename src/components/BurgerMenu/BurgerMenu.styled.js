import styled from "styled-components";

export const Menu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(20, 20, 20, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 555;
  transform: translateX(-100%);
  transition: transform 250ms ease;

  &.open {
    transform: translateX(0%);
  }
`;
export const Div = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50vw;
  height: 100vh;
  background-color: #141414;
`;
export const Button = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  svg {
    fill: #fff;
    stroke: #fff;
  }
`;
