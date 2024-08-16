import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ContactForm, Input, Button } from "./From.styled";
import { toast } from "react-toastify";

export const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const info = form.current.user_name.value !== "" && form.current;
    console.log(info);

    emailjs
      .sendForm("service_57s60hj", "template_b0q6cxh", info, {
        publicKey: "BVYL7WJKUFpgBNLir",
      })
      .then(
        () => {
          toast.success("Message sent");
        },
        (error) => {
          toast.error("Fill in the field...", error.text);
        }
      );
    form.current.reset();
  };
  return (
    <>
      <ContactForm ref={form} onSubmit={sendEmail}>
        <Input name="user_name" placeholder="Jordan Walke " type="text" />

        <Input
          name="user_email"
          placeholder="JordanWalke@gmail.com"
          type="email"
        />

        <Input name="message" placeholder="Hello...." type="text" />

        <Button type="submit">Send</Button>
      </ContactForm>
    </>
  );
};
