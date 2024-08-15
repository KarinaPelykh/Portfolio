import { Wrapper } from "./MyProject.styled";
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
  };

  const { size } = useSizeWindow();
  const sizeWindow = size <= 768;
  return (
    <Wrapper>
      {sizeWindow ? (
        <ListProject handelToggle={handelToggle} />
      ) : (
        <SliderComponent handelToggle={handelToggle} />
      )}
      {isOpen && (
        <ModalWindow onClick={handelToggle} open={isOpen} id={idProject} />
      )}
    </Wrapper>
  );
};
