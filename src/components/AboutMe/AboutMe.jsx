// import Swiper from "swiper";
import {
  Section,
  Sidebar,
  // Skills,
  Languages,
  Text,
  Title,
} from "./AboutMe.styled";
// import "swiper/css";
// import "swiper/css/virtual";
// import { SwiperSlide } from "swiper/react";
// import technologes from "../../assets/data/technologes";
export const AboutME = () => {
  return (
    <Section>
      <Sidebar>
        <Title>About me</Title>
        <Text>
          I am a junior Frontend Developer with a passion for creating beautiful
          and useful applications. I am positive, communicative, and always
          eager to learn new things. I thrive in collaborative environments and
          am ready to take on new challenges. Feel free to reach out to me; I am
          open to new opportunities and excited to become a valuable member of
          your team.
        </Text>
      </Sidebar>

      <Languages>
        <h2>Languages</h2>
        <ul>
          <li>Ukrainian - Native</li>
          <li>Czech - Intermediate</li>
          <li>English - Pre-intermediate</li>
        </ul>
      </Languages>
      {/* <Skills>
        <ul>
          {technologes.map(({ id, item }) => (
            <li key={id}>
              <img src={item} alt="item" />
            </li>
          ))}
        </ul>
      </Skills> */}
    </Section>
  );
};
