import { Container } from "../Container/Container";
import { Logo } from "../Logo/Logo";
import { LinkNav, Headers, Div } from "./Header.styled";
export const Header = () => {
  return (
    <Headers>
      <Container>
        <Div>
          <Logo />
          <nav>
            <LinkNav to="aboutme">About me</LinkNav>
            <LinkNav to="project">Project</LinkNav>
            <LinkNav to="contacts">Contacts</LinkNav>
          </nav>
        </Div>
      </Container>
    </Headers>
  );
};
