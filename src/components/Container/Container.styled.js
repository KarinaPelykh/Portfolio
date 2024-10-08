import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 20px;
  ${({ $variant }) =>
    $variant === "home" &&
    css`
      overflow-x: hidden;
    `};
  @media screen and (min-width: 376px) {
    max-width: 375px;
  }
  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 32px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1280px;
  }
`;
