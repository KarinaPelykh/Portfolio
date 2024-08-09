import { Div } from "./Loader.styled";
import loader from "../../images/Logo.png";
export const Loader = () => {
  return (
    <Div>
      <img src={loader} alt="Loader" />
    </Div>
  );
};
