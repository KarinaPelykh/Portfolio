import { useState } from "react";
import icon from "../../images/sprite.svg";
import { Button, Svg } from "./ButtonMenu.styled";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
export const ButtonMenu = () => {
  const [open, setOpen] = useState(false);
  const handelClose = () => {
    setOpen(!open);
  };
  return (
    <>
      <Button onClick={handelClose}>
        <Svg width={24} height={24}>
          <use xlinkHref={icon + "#burger-button"}></use>
        </Svg>
      </Button>
      <BurgerMenu handelClose={handelClose} open={open} />
    </>
  );
};
