import {
  Section,
  SectionDescription,
  ListLanguages,
  ListEducation,
  TextDescription,
  Text,
  Wrapper,
  TextName,
  Title,
  List,
  Item,
  ItemLanguages,
  ItemEducation,
  MyIMage,
  EDInstitution,
  Span,
} from "./AboutMe.styled";
import myPhoto from "../../images/my-photo.png";
import { dataHardSkill } from "../../assets/data/technologes";
import { useEffect } from "react";
import AOS from "aos";

export const AboutME = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  });
  return (
    <>
      <Section>
        <Wrapper>
          <div>
            <Text $delay="500ms"></Text>
            <TextName $delay="500ms">Karyna Pelykh</TextName>
          </div>

          <MyIMage $delay="600ms" src={myPhoto} alt="My photo" />
        </Wrapper>
      </Section>
      <SectionDescription data-aos="fade-up">
        <Title data-aos="slide-up">About me</Title>
        <TextDescription>
          I am a junior Frontend Developer with a passion for creating beautiful
          and useful applications and i have been 1.5 year experience in
          programming. I am positive, communicative, and always eager to learn
          new things. I thrive in collaborative environments and am ready to
          take on new challenges. Feel free to reach out to me; I am open to new
          opportunities and excited to become a valuable member of your team.
        </TextDescription>
      </SectionDescription>
      <Section className="hidden">
        <Title data-aos="fade-down"> 01 Hard skills</Title>
        <List data-aos="zoom-in-right">
          {dataHardSkill.map(({ id, item }) => {
            return <Item key={id}>{item}</Item>;
          })}
        </List>
      </Section>
      <Section className="hidden" data-aos="slide-left">
        <Title data-aos="fade-down"> 02 Languages</Title>
        <ListLanguages>
          <ItemLanguages>Ukrainian - Native</ItemLanguages>
          <ItemLanguages>Czech - Intermediate</ItemLanguages>
          <ItemLanguages>English - Pre-intermediate</ItemLanguages>
        </ListLanguages>
      </Section>
      <Section className="hidden" data-aos="slide-right">
        <Title data-aos="fade-down"> 03 Education</Title>
        <ListEducation>
          <ItemEducation>
            <EDInstitution>
              Poltava University Of Economics And Trade
            </EDInstitution>
            <Span>Specialty: Bachelor Computer Science</Span>
            <p> september 2023</p>
          </ItemEducation>
          <ItemEducation>
            <EDInstitution>IT School GoIT</EDInstitution>
            <Span>Specialty: Front-ed Dev</Span>
            <p>May 2023 - August 2023</p>
          </ItemEducation>
        </ListEducation>
      </Section>
    </>
  );
};
