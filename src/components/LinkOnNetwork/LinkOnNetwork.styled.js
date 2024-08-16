import styled from "styled-components";

export const WrapperLink = styled.div`
  margin-top: 10px;
`;
export const Link = styled.a``;
export const Span = styled.span`
  font-family: "FixelDisplay-Medium";

  font-weight: 500px;
`;
export const Svg = styled.svg`
  stroke: #fff;
  fill: transparent;
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: ease-in-out;
  transition-delay: 100ms;
  &:hover {
    transform: scale(1.5);
  }
`;
