import {
  Div,
  Text,
  Button,
  TextAnim,
  Wrapper,
  TextVerb,
  WrapperText,
} from "./Home.styled";
import { Container } from "../Container/Container";
import { useNavigate } from "react-router-dom";
import { Animation } from "./Animation/Animation";
export const Home = () => {
  const navigation = useNavigate();
  const handelNavigate = () => {
    navigation("/aboutme");
  };

  return (
    <Div>
      <Container $variant="home">
        <Animation />
        <Wrapper>
          <WrapperText>
            <Text>Hi</Text>
            <TextVerb>I&apos;m</TextVerb>
            <TextAnim></TextAnim>
          </WrapperText>
          <Button onClick={handelNavigate}>Go explore</Button>
        </Wrapper>
        <Animation />
      </Container>
    </Div>
  );
};
