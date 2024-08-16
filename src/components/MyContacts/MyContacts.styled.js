import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;
export const Div = styled.div`
  border-top: 2px #fff solid;
  margin-right: 8px;
  @media screen and (min-width: 768px) {
    width: 620px;
    margin-right: 0px;
  }

  p {
    font-family: "FixelDisplay-Medium";
    font-size: 17px;
    @media screen and (min-width: 768px) {
      font-size: 20px;
    }
  }
`;
export const List = styled.ul`
  border-top: 2px #fff solid;
  @media screen and (min-width: 768px) {
    width: 620px;
  }
`;
export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  &:last-child {
    margin: 0px;
  }
`;
export const Link = styled.a`
  font-size: 17px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
  position: relative;

  &:hover::before {
    opacity: 1;
    transform: scaleX(1);
  }

  &::before {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 3px;
    border-radius: 10px;
    background-image: linear-gradient(to right, pink, blue);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 500ms linear, opacity 500ms linear;
    opacity: 0;
  }
`;
export const Images = styled.img`
  margin-left: 5px;
`;
