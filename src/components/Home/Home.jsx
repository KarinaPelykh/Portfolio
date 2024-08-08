import { useEffect, useRef, useState } from "react";
import NET from "vanta/dist/vanta.net.min";
import { Div, Text, Section, Button } from "./Home.styled";
import { Container } from "../Container/Container";
import { useNavigate } from "react-router-dom";
export const Home = () => {
  const navigation = useNavigate();
  const handelNavigate = () => {
    navigation("/aboutme");
  };
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x643fff,
          backgroundColor: 0x141414,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <Div ref={myRef}>
      <Container>
        <Section>
          <Text>Hi👋</Text>
          <Text>
            I&apos;m Karyna Pelykh ✨ <pre>frontend developer👩‍💻</pre>
          </Text>
          <Button onClick={handelNavigate}>Go explore</Button>
        </Section>
      </Container>
    </Div>
  );
};
