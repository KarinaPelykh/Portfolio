import { useEffect, useRef, useState } from "react";
import HALO from "vanta/dist/vanta.HALO.min";
import { Div, Text, Section, Button, TextAnim } from "./Home.styled";
import { Container } from "../Container/Container";
import { useNavigate } from "react-router-dom";
export const Home = () => {
  const navigation = useNavigate();
  const handelNavigate = () => {
    navigation("/aboutme");
  };
  // const [vantaEffect, setVantaEffect] = useState(null);
  // const myRef = useRef(null);
  // useEffect(() => {
  //   if (!vantaEffect) {
  //     setVantaEffect(
  //       HALO({
  //         el: myRef.current,
  //         mouseControls: true,
  //         touchControls: true,
  //         gyroControls: false,
  //         minHeight: 200.0,
  //         minWidth: 200.0,
  //         scale: 1.0,
  //         scaleMobile: 1.0,
  //         color: 0x643fff,
  //         backgroundColor: 0x141414,
  //       })
  //     );
  //   }
  //   return () => {
  //     if (vantaEffect) vantaEffect.destroy();
  //   };
  // }, [vantaEffect]);

  return (
    <Div>
      <Container>
        <Section>
          <Text>Hi</Text>
          <Text>
            I&apos;m Karyna Pelykh <TextAnim></TextAnim>
          </Text>
        </Section>{" "}
        <Button onClick={handelNavigate}>Go explore</Button>
      </Container>
    </Div>
  );
};
