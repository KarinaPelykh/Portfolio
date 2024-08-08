import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 10px;

  display: flex;
  justify-content: space-between;
`;
export const Div = styled.div`
  border-top: 2px #fff solid;
  width: 620px;
`;
export const List = styled.ul`
  border-top: 2px #fff solid;
  width: 620px;
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
  font-size: 20px;
`;
export const Images = styled.img`
  margin-left: 5px;
`;
