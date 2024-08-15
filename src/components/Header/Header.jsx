import { useLocation } from "react-router-dom";
import { Container } from "../Container/Container";
import { Logo } from "../Logo/Logo";
import { Headers, Div } from "./Header.styled";
import { ButtonMenu } from "../ButtonMenu/ButtonMenu";
import { NavUser } from "./Nav.jsx";
export const Header = () => {
  const navigation = useLocation();
  const location = navigation.pathname === "/";
  return (
    !location && (
      <Headers>
        <Container>
          <Div>
            <Logo />
            <NavUser />
            <ButtonMenu />
          </Div>
        </Container>
      </Headers>
    )
  );
};
