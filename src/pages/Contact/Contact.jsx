import { Container } from "../../components/Container/Container";
import { Form } from "../../components/Form/Form";
import { MyContacts } from "../../components/MyContacts/MyContacts";
import { Div } from "./Contact.styled";

export const Contacts = () => {
  return (
    <Container>
      <Div>
        <Form />
        <MyContacts />
      </Div>
    </Container>
  );
};
