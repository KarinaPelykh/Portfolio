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
  transform: translateX(100%);
  transition: all 300ms ease-out;
  &.open {
    transform: translateX(0);
  }
`;
export const Div = styled.div`
  width: 600px;
  height: 370px;
  background-image: linear-gradient(to right, #e95ce9, #0cbaf1);
  padding: 30px;
  border-radius: 30px;
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
export const Item = styled.li``;
export const Title = styled.h2`
  font-family: "GreyQo-Regular", serif;
  margin-bottom: 10px;
  line-height: 1.5;
`;
// export const Image = styled.img`
//   border-radius: 15px;
//   width: 520px;
//   height: 260px;
// `;
// export const Svg = styled.svg`
//   fill: #fff;
// `;
// export const WrapperLink = styled.div`
//   margin-top: 10px;
// `;
