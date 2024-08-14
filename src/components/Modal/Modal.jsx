import { data } from "../../assets/data/project";
import { Div, Modal, Button, Item, Title } from "./Modal.styled";
import icon from "../../images/sprite.svg";
import { SliderImages } from "../SliderImages/SliderImages";
import { LinkOnNetwork } from "../LinkOnNetwork/LinkOnNetwork";

export const ModalWindow = ({ onClick, open, id }) => {
  return (
    <>
      <Modal className={open ? "open" : ""}>
        <Div>
          <Button onClick={onClick}>
            <svg width={24} height={24}>
              <use xlinkHref={icon + "#close"}></use>
            </svg>
          </Button>
          <ul>
            {data
              .filter((el) => el.id === id)
              .map(({ id, title, linkProject, linkGithub }) => (
                <Item key={id}>
                  <Title>{title}</Title>

                  <SliderImages id={id} />
                  <LinkOnNetwork
                    linkProject={linkProject}
                    linkGithub={linkGithub}
                    height={30}
                    width={30}
                  />
                </Item>
              ))}
          </ul>
        </Div>
      </Modal>
    </>
  );
};
