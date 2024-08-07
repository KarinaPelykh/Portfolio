import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ContactForm, Label, Input, Textarea, Button } from "./From.styled";
import { toast } from "react-toastify";

export const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_57s60hj", "template_b0q6cxh", form.current, {
        publicKey: "BVYL7WJKUFpgBNLir",
      })
      .then(
        () => {
          toast.success("Message sent");
        },
        (error) => {
          toast.error("FAILED...", error.text);
        }
      );
    form.current.reset();
  };
  return (
    <>
      <ContactForm ref={form} onSubmit={sendEmail}>
        <Label>
          Name
          <Input name="user_name" placeholder="Jordan Walke " type="text" />
        </Label>
        <Label>
          Email
          <Input
            name="user_email"
            placeholder="JordanWalke@gmail.com"
            type="email"
          />
        </Label>
        <Label>
          Let`s me know if you want to cooperate
          <Textarea name="message" placeholder="Hello...."></Textarea>
        </Label>
        <Button type="submit">Send</Button>
      </ContactForm>
    </>
  );
};
