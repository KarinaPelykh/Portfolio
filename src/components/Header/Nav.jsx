import { LinkNav, Nav } from "./Header.styled";

export const NavUser = ({ $variant }) => {
  return (
    <Nav $variant={$variant}>
      <LinkNav to="aboutme">About me</LinkNav>
      <LinkNav to="project">Project</LinkNav>
      <LinkNav to="contacts">Contacts</LinkNav>
    </Nav>
  );
};
