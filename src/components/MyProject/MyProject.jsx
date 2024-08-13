import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "../../assets/data/project";

import "./Slider.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { Wrapper } from "./MyProject.styled";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { ItemProject } from "./ItemProject/ItemProject";
import { useState } from "react";
import { ModalWindow } from "../Modal/Modal";
export const MyProject = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [idProject, setId] = useState(null);
  const handelToggle = (id) => {
    setIsOpen(!isOpen);
    setId(id);
  };
  return (
    <Wrapper>
      <Swiper
        className="slider "
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        spaceBetween={2}
        slidesPerView={1}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        speed={5000}
        loop={true}
      >
        {data.map(
          ({
            id,
            item,
            alt,
            title,

            linkProject,
            linkGithub,
            position,
            description,
          }) => {
            return (
              <SwiperSlide key={id}>
                <ItemProject
                  id={id}
                  item={item}
                  alt={alt}
                  title={title}
                  linkProject={linkProject}
                  linkGithub={linkGithub}
                  position={position}
                  description={description}
                  handelToggle={handelToggle}
                />
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
      {isOpen && (
        <ModalWindow onClick={handelToggle} open={isOpen} id={idProject} />
      )}
    </Wrapper>
  );
};
