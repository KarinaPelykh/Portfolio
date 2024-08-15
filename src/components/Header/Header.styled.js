import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const Headers = styled.header``;

export const Nav = styled.nav`
  display: none;

  ${({ $variant }) =>
    $variant === "menu" &&
    css`
      display: flex;
      flex-direction: column;
      color: #000;
      justify-content: center;
      align-items: center;
      a {
        margin: 0 0 10px 0;
      }
    `}
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const LinkNav = styled(NavLink)`
  position: relative;
  margin-left: 40px;

  &.active::before {
    position: absolute;
    top: 100%;
    left: 0;
    content: "";
    height: 5px;
    border-radius: 10px;
    width: 100%;
    background-image: linear-gradient(to right, #0cbaf1, #e95ce9);
    display: inline-block;
  }
`;

export const Div = styled.div`
  display: flex;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
