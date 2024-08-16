import { NavUser } from "../Header/Nav";
import { Menu, Div, Button } from "./BurgerMenu.styled";
import icon from "../../images/sprite.svg";
export const BurgerMenu = ({ handelClose, open }) => {
  if (open) {
    document.body.style.overflow = "hidden";
  }
  const handelCloseOnClick = (e) => {
    if (e.target === e.currentTarget) {
      handelClose();
      document.body.style.overflow = "auto";
    }
  };

  return (
    <Menu onClick={handelCloseOnClick} className={open ? "open" : "close"}>
      <Div>
        <Button onClick={handelClose}>
          <svg width={24} height={24}>
            <use xlinkHref={icon + "#close"}></use>
          </svg>
        </Button>
        <NavUser $variant="menu" />
      </Div>
    </Menu>
  );
};
