import styled from "styled-components";

export const Item = styled.li`
  margin-bottom: 50px;
  &:last-child {
    margin-bottom: 0px;
  }
  @media screen and (min-width: 769px) {
    display: flex;
    flex-direction: column;
    width: 1200px;
    margin-bottom: 0px;
  }
`;
export const Title = styled.h1`
  font-size: 80px;
  font-family: "GreyQo-Regular";
  margin-bottom: 20px;
  border-bottom: 2px #fff solid;
  text-align: end;
  line-height: 1.5;
`;

export const Thumb = styled.div`
  display: block;
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
  }
`;

export const Images = styled.img`
  border-radius: 30px;
  border: 3px #fff solid;
  width: 400px;
  height: 200px;

  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    margin-right: 20px;
    height: 220px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 0px;
  }
`;
export const Text = styled.p`
  text-align: end;

  @media screen and (min-width: 768px) {
    margin-right: 20px;
  }
`;
export const Description = styled.p`
  line-height: 1.8;
  align-items: start;
  margin-bottom: 20px;
`;
export const Span = styled.span`
  font-family: "FixelDisplay-Medium";

  font-weight: 500px;
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    a {
      margin-right: 20px;
    }
    a:last-child {
      margin-right: 0px;
    }
  }
`;
export const TextTechnologies = styled.p`
  font-size: 15px;
  span {
    font-size: 18px;
  }
`;
