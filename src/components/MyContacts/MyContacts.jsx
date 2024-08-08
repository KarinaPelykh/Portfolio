import { Div, Images, Item, Link, List, Wrapper } from "./MyContacts.styled";
import linkedin from "../../images/linkedin.png";
import telegram from "../../images/telegram.png";
import githab from "../../images/cat.png";
import email from "../../images/mail.png";
import phone from "../../images/telephone.png";
export const MyContacts = () => {
  const data = [
    {
      id: 1,
      text: "Telegram",
      link: "https://t.me/karinapelykh",
      target: "_blank ",
      png: telegram,
    },
    {
      id: 2,
      text: "Linkedin",
      link: "https://www.linkedin.com/in/karyna-pelykh-44064427b",
      target: "_blank ",
      png: linkedin,
    },
    {
      id: 3,
      text: "GitHub",
      link: "https://github.com/KarinaPelykh",
      target: "_blank ",
      png: githab,
    },
    {
      id: 4,
      text: " pelihkarina0@gmail.com",
      link: "mailto:pelihkarina0@gmail.com",
      png: email,
    },
    {
      id: 5,
      text: "+42(077)66-25-657",
      link: "tel:+42(077)66-25-657",
      png: phone,
    },
  ];
  return (
    <Wrapper>
      <Div>
        <p>Social</p>
      </Div>
      <List>
        {data.map(({ id, text, link, target, png }) => (
          <Item key={id}>
            <Link target={target} href={link}>
              {text}
            </Link>
            <Images src={png} width={25} height={25} alt="social network" />
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};
