import { NavUser } from "../Header/Nav";
import { Menu, Div, Button } from "./BurgerMenu.styled";
import icon from "../../images/sprite.svg";
export const BurgerMenu = ({ handelClose, open }) => {
  return (
    open && (
      <Menu>
        <Div>
          <Button onClick={handelClose}>
            <svg width={24} height={24}>
              <use xlinkHref={icon + "#close"}></use>
            </svg>
          </Button>
          <NavUser $variant="menu" />
        </Div>
      </Menu>
    )
  );
};
