import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <nav>
        <Link to="aboutme">About me</Link>
        <Link to="project">Project</Link>
        <Link to="contacts">Contacts</Link>
      </nav>
      <Outlet />
    </>
  );
};
