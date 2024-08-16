import { contact } from "../../assets/data/contact";
import { Div, Images, Item, Link, List, Wrapper } from "./MyContacts.styled";

export const MyContacts = () => {
  return (
    <Wrapper>
      <Div>
        <p>Social</p>
      </Div>
      <List>
        {contact.map(({ id, text, link, target, png }) => (
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
