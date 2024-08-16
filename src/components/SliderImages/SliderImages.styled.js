import styled from "styled-components";

export const Image = styled.img`
  border-radius: 15px;
  width: 250px;
  height: 150px;
  @media screen and (min-width: 375px) {
    width: 400px;
    height: 180px;
  }

  @media screen and (min-width: 767px) {
    width: 520px;
    height: 260px;
  }
`;
