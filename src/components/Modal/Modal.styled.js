import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(20, 20, 20, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition-property: transform;
  transform: translateX(100%);
  transition-delay: 500ms;
  transition-timing-function: linear;
  transition-duration: 500ms;

  &.open {
    transform: translateX(0);
  }
`;
export const Div = styled.div`
  width: 250px;
  background-image: linear-gradient(to right, #e95ce9, #0cbaf1);
  padding: 30px;
  border-radius: 30px;
  @media screen and (min-width: 375px) {
    width: 300px;
    height: 370px;
  }

  @media screen and (min-width: 768px) {
    width: 600px;
    height: 370px;
  }
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
export const Title = styled.h2`
  font-family: "GreyQo-Regular", serif;
  margin-bottom: 10px;
  line-height: 1.5;
`;
export const Image = styled.img`
  border-radius: 15px;
  width: 520px;
  height: 260px;
`;
