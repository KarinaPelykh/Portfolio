import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "../../../assets/data/project";
import { ItemProject } from "../ItemProject/ItemProject";
import "../Slider.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
export const SliderComponent = ({ handelToggle }) => {
  return (
    <Swiper
      className="slider "
      modules={[Navigation, Pagination, Scrollbar, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      autoplay={{
        delay: 1,
        disableOnInteraction: false,
      }}
      speed={4000}
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
          technologies,
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
                technologies={technologies}
                description={description}
                handelToggle={handelToggle}
              />
            </SwiperSlide>
          );
        }
      )}
    </Swiper>
  );
};
