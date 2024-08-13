import { data } from "../../assets/data/project";
import { Div, Modal } from "./Modal.styled";

import icon from "../../images/sprite.svg";
export const ModalWindow = ({ onClick, open, id }) => {
  return (
    <>
      {open && (
        <Modal>
          <Div>
            <button onClick={onClick}> close</button>
            {data
              .filter((el) => el.id === id)
              .map(
                ({
                  id,
                  item,
                  alt,
                  title,

                  linkProject,
                  linkGithub,
                }) => (
                  <li key={id}>
                    <h2>{title}</h2>
                    <img src={item} alt={alt} />
                    <div>
                      <a href={linkProject}>
                        <svg height={30} width={30}>
                          <use xlinkHref={icon + "#link"}></use>
                        </svg>
                      </a>
                      <a href={linkGithub}>
                        <svg height={30} width={30}>
                          <use xlinkHref={icon + "#github"}></use>
                        </svg>
                      </a>
                    </div>
                  </li>
                )
              )}
          </Div>
        </Modal>
      )}
    </>
  );
};
