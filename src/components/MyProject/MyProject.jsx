import { useState } from "react";
import { ModalWindow } from "../Modal/Modal";
import useSizeWindow from "../../Hook/useSize";
import { SliderComponent } from "./SliderComponent/SliderComponent";
import { ListProject } from "./ListProject/ListProject";
export const MyProject = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [idProject, setId] = useState(null);

  const handelToggle = (id) => {
    setIsOpen(!isOpen);
    setId(id);
    document.body.style.overflow = "auto";
  };
  const { size } = useSizeWindow();
  const sizeWindow = size <= 767;
  return (
    <>
      {sizeWindow ? (
        <ListProject handelToggle={handelToggle} />
      ) : (
        <SliderComponent handelToggle={handelToggle} />
      )}
      {isOpen && (
        <ModalWindow onClick={handelToggle} open={isOpen} id={idProject} />
      )}
    </>
  );
};
