import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "../../assets/data/project";
import icon from "../../images/sprite.svg";
import "./Slider.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import {
  Wrapper,
  Item,
  Title,
  Images,
  Text,
  Description,
  Link,
  LinkGithub,
  Span,
  Thumb,
  Svg,
} from "./MyProject.styled";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
export const MyProject = () => {
  return (
    <Wrapper>
      <Swiper
        className="slider "
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        spaceBetween={2}
        slidesPerView={1}
        pagination={{ clickable: true }}
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
                <Item>
                  <Title>{title}</Title>
                  <Thumb>
                    <Images src={item} alt={alt} width={550} height={400} />
                    <div>
                      <Text>
                        <Span>Position:</Span> {position}
                      </Text>
                      <Description>Description: {description}</Description>
                      <Link href={linkProject}>
                        <Svg height={30} width={30}>
                          <use xlinkHref={icon + "#link"}></use>
                        </Svg>
                      </Link>
                      <LinkGithub href={linkGithub}>
                        <Svg height={30} width={30}>
                          <use xlinkHref={icon + "#github"}></use>
                        </Svg>
                      </LinkGithub>
                    </div>
                  </Thumb>
                </Item>
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </Wrapper>
  );
};
