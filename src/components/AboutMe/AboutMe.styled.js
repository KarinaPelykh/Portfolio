import styled, { keyframes } from "styled-components";

export const Section = styled.section`
  padding: 40px 20px;
  margin-top: 40px;
`;
export const SectionDescription = styled.section`
  display: flex;
  flex-direction: column;
  margin: 60px 0 0 0;
  align-items: center;
  padding: 40px 20px;
`;
export const Wrapper = styled.div`
  margin-top: 200px;
`;

export const Text = styled.p`
  font-family: "GreyQo-Regular", serif;
  font-size: 100px;
`;

export const TextName = styled.p`
  font-size: 100px;
`;
const rotate = keyframes`

from{
  opacity: 0
}
to{
  opacity:1
}`;
export const TextDescription = styled.p`
  font-size: 20px;
  width: 800px;
  text-align: center;
  animation: ${rotate} linear both;
  animation-timeline: view();
  animation-range: entry 50% cover 30%;
`;
const title = keyframes`

from{
  transform:translateX(0)
}
to{
  transform:translateX(80%)
}`;
export const Title = styled.h2`
  font-size: 30px;
  margin-bottom: 30px;
  animation: ${title} 500ms linear both;
  animation-timeline: scroll();
`;

const hied = keyframes`

from{
  transform:translateX(100%)
}
to{
  transform:translateX(0)
}`;

export const List = styled.ul`
  border-bottom: 2px #fff solid;

  height: 400px;
  align-content: space-evenly;
  display: grid;
  grid-column-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 50px 50px 50px;
`;
export const Item = styled.li`
  animation: ${hied} 500ms linear both;
  animation-timeline: view();
  animation-range: entry 50% cover 30%;

  font-size: 30px;
`;
const itemLanguages = keyframes`

from{
  transform:translateX(100%)
}
to{
  transform:translateX(0)
}`;
export const ItemLanguages = styled.li`
  animation: ${itemLanguages} 500ms linear both;
  animation-timeline: scroll();
  font-size: 30px;
`;
export const ListLanguages = styled.ul`
  border-bottom: 2px #fff solid;
  display: flex;
  justify-content: space-between;
  align-items: center;

  li {
    margin-bottom: 40px;
  }
`;
const itemEducation = keyframes`

from{
  transform:translateX(0)
}
to{
  transform:translateX(40%)
}`;
export const ItemEducation = styled.li`
  animation: ${itemEducation} 500ms linear both;
  animation-timeline: scroll();
  font-size: 30px;
`;

export const ListEducation = styled.ul`
  border-bottom: 2px #fff solid;
  display: grid;
  grid-column-gap: 10px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100px 50px;
`;
export const Skills = styled.div`
  width: 500px;
`;
