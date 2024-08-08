import { Link } from "react-router-dom";
import MyLogo from "../../images/Logo.png";
export const Logo = () => {
  return (
    <Link to="/">
      <img src={MyLogo} alt="logo" width={80} height={60} />
    </Link>
  );
};
