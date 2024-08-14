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
} from "./AboutMe.styled";
import myPhoto from "../../images/my-photo.png";
import { dataHardSkill } from "../../assets/data/technologes";
export const AboutME = () => {
  return (
    <>
      <Section>
        <Wrapper>
          <div>
            {" "}
            <Text>hi there, I&lsquo;m </Text>
            <TextName>Karyna Pelykh</TextName>
          </div>

          <MyIMage src={myPhoto} alt="My photo" />
        </Wrapper>
      </Section>
      <SectionDescription>
        <Title>About me</Title>
        <TextDescription>
          I am a junior Frontend Developer with a passion for creating beautiful
          and useful applications and i have been 1.5 year experience in
          programming. I am positive, communicative, and always eager to learn
          new things. I thrive in collaborative environments and am ready to
          take on new challenges. Feel free to reach out to me; I am open to new
          opportunities and excited to become a valuable member of your team.
        </TextDescription>
      </SectionDescription>
      <Section>
        <Title> 01 Hard skills</Title>
        <List>
          {dataHardSkill.map(({ id, item }) => {
            return <Item key={id}>{item}</Item>;
          })}
        </List>
      </Section>
      <Section>
        <Title> 02 Languages</Title>
        <ListLanguages>
          <ItemLanguages>Ukrainian - Native</ItemLanguages>
          <ItemLanguages>Czech - Intermediate</ItemLanguages>
          <ItemLanguages>English - Pre-intermediate</ItemLanguages>
        </ListLanguages>
      </Section>
      <Section>
        <Title> 03 Education</Title>
        <ListEducation>
          <ItemEducation>
            Poltava University Of Economics And Trade Bachelor Computer Science
            <p>2023</p>
          </ItemEducation>
          <ItemEducation>
            IT School GoIT <p>May 2023 - August 2023</p>
          </ItemEducation>
        </ListEducation>
      </Section>
    </>
  );
};
