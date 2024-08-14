import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { slider } from "../../assets/data/slider";
import { Image } from "./SliderImages.styled";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
export const SliderImages = ({ id }) => {
  return (
    <Swiper
      className="slider "
      navigation={true}
      modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={2}
      slidesPerView={1}
    >
      {slider
        .filter((el) => el.id === id)
        .map(({ item }) =>
          item.map((itemSrc, idImg, { alt }) => (
            <SwiperSlide key={idImg}>
              <Image src={itemSrc} alt={alt} />
            </SwiperSlide>
          ))
        )}
    </Swiper>
  );
};
