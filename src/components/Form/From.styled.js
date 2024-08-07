import styled from "styled-components";
export const ContactForm = styled.form`
  background-color: #3232a8;
  width: 400px;
  padding: 40px 20px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  margin-top: 50px;
`;
export const Label = styled.label`
  color: black;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  border-radius: 15px;
  padding: 12px 20px;
  outline: none;
  border-color: transparent;
  margin-top: 5px;
`;
export const Textarea = styled.textarea`
  padding: 20px;
  border-color: transparent;
  height: 100px;
  resize: none;
  border-radius: 15px;
  margin-bottom: 10px;
`;
export const Button = styled.button`
  padding: 12px 20px;
  background-color: #fff;
  border-radius: 30px;
  border-color: transparent;
  width: 300px;
  margin-right: auto;
  margin-left: auto;
`;
export const Text = styled.p`
  font-family: "GreyQo-Regular";
  font-size: 30px;
`;
