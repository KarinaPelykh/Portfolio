import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Headers = styled.header``;

export const Nav = styled.nav``;

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
