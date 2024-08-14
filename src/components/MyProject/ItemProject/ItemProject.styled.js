import styled from "styled-components";

export const Wrapper = styled.div``;
export const List = styled.ul``;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: 1200px;
`;
export const Thumb = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Title = styled.h1`
  font-size: 80px;
  font-family: "GreyQo-Regular";
  margin-bottom: 20px;
  border-bottom: 2px #fff solid;
  text-align: end;
  line-height: 1.5;
`;
export const Images = styled.img`
  border-radius: 30px;
  margin-right: 20px;
  border: 3px #fff solid;
  width: 400px;
  height: 220px;
`;
export const Text = styled.p`
  text-align: end;
  margin-right: 20px;
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
  a {
    margin-right: 20px;
  }
  a:last-child {
    margin-right: 0px;
  }
`;
export const TextTechnologies = styled.p`
  font-size: 15px;
  span {
    font-size: 18px;
  }
`;
