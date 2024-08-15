import styled, { keyframes } from "styled-components";

export const Section = styled.section`
  padding: 40px 20px;
  margin-top: 40px;
  position: relative;
`;
export const Wrapper = styled.div`
  margin-top: 100px;
  @media screen and (min-width: 400px) {
    margin-top: 300px;
  }
`;

const grating = keyframes`


0% {
    content: "h";
  }
  8% {
    content: "hi";
  }10% {
    content: "hi   ";
  }
  20% {
    content: "hi    t";
  }
  30% {
    content: "hi    th";
  }
    40% {
    content: "hi    the";
  }
  50% {
    content: "hi    ther";
  }
  60% {
    content: "hi    there";
  }
  70% {
    content: "hi    there i";
  }
  94% {
    content: "hi    there i'";
  }

  100% {
    content: "hi    there i'm";
  }
  
`;

export const Text = styled.p`
  font-size: 70px;
  font-family: "GreyQo-Regular", serif;
  &::before {
    content: "";
    position: absolute;
    bottom: 150px;
    left: 10px;
    display: inline-block;
    width: 100%;
    animation: ${grating} 1200ms linear 1;
    animation-delay: ${({ $delay }) => $delay || "0s"};
    animation-fill-mode: forwards;
  }

  @media screen and (min-width: 768px) {
    font-size: 100px;
  }
`;

const textName = keyframes`
 0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }`;
export const TextName = styled.p`
  font-size: 50px;
  animation: ${textName} 2000ms linear both;
  animation-delay: ${({ $delay }) => $delay || "0s"};
  @media screen and (min-width: 768px) {
    font-size: 80px;
  }
  @media screen and (min-width: 1400px) {
    font-size: 100px;
  }
`;

const s = keyframes`

from{
  opacity:0
}
to{
opacity:1
}`;

export const MyIMage = styled.img`
  position: absolute;
  bottom: 0px;

  right: 0px;
  z-index: -1;
  animation: ${s} 800ms linear both;
  animation-delay: ${({ $delay }) => $delay || "0s"};
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  @media screen and (min-width: 768px) {
    width: 500px;
    right: -30px;
  }
`;

export const SectionDescription = styled.section`
  display: flex;
  flex-direction: column;
  margin: 60px 0 0 0;
  align-items: center;
  padding: 40px 20px;
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
  /* animation: ${title} 500ms linear both;
  animation-timeline: scroll(); */
`;
const rotate = keyframes`

from{
  opacity: 0
}
to{
  opacity:1
}`;

export const TextDescription = styled.p`
  text-align: center;
  line-height: 1.5;
  animation: ${rotate} linear both;
  @media screen and (min-width: 1440px) {
    font-size: 20px;

    width: 800px;
  }

  /* animation-timeline: view();
  animation-range: entry 50% cover 30%; */
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
  align-content: space-evenly;
  display: grid;

  @media screen and (min-width: 768px) {
    height: 400px;
    grid-column-gap: 10px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 50px 50px 50px;
  }
`;
export const Item = styled.li`
  animation: ${hied} 500ms linear both;
  /* animation-timeline: view();
  animation-range: entry 50% cover 30%; */

  font-size: 30px;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
  }
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
  /* animation-timeline: scroll(); */
  font-size: 30px;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
  }
`;
export const ListLanguages = styled.ul`
  border-bottom: 2px #fff solid;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
      margin-bottom: 40px;
    }
    li:last-child {
      margin-bottom: 0px;
    }
  }
`;
const itemEducation = keyframes`


from{
  transform:translateX(100%)
}
to{
  transform:translateX(0)
}`; /* from{
  transform:translateX(0)
}
to{
  transform:translateX(40%)
}`; */
export const ItemEducation = styled.li`
  animation: ${itemEducation} 500ms linear both;
  /* animation-timeline: scroll(); */
  font-size: 30px;
  display: flex;
  flex-direction: column;
`;

export const ListEducation = styled.ul`
  border-bottom: 2px #fff solid;
  display: grid;
  grid-column-gap: 10px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    li {
      margin-bottom: 0px;
    }
  }

  li {
    margin-bottom: 40px;
  }
  li:last-child {
    margin-bottom: 0px;
  }
`;
export const Skills = styled.div`
  width: 500px;
`;
export const EDInstitution = styled.span`
  font-family: "FixelDisplay-Medium";
  margin-bottom: 15px;
  font-size: 25px;
`;
export const Span = styled.span`
  font-family: "FixelDisplay-Medium";
  margin-bottom: 15px;
  font-size: 22px;
`;
