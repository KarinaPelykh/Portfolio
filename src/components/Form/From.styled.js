// import styled from "styled-components";
// export const ContactForm = styled.form`
//   background-color: #3232a8;
//   width: 400px;
//   padding: 40px 20px;
//   border-radius: 30px;
//   display: flex;
//   flex-direction: column;
//   margin-left: 100px;
//   margin-top: 50px;
// `;
// export const Label = styled.label`
//   color: black;
//   font-size: 18px;
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 10px;
// `;

// export const Input = styled.input`
//   border-radius: 15px;
//   padding: 12px 20px;
//   outline: none;
//   border-color: transparent;
//   margin-top: 5px;
// `;
// export const Textarea = styled.textarea`
//   padding: 20px;
//   border-color: transparent;
//   height: 100px;
//   resize: none;
//   border-radius: 15px;
//   margin-bottom: 10px;
// `;
// export const Button = styled.button`
//   padding: 12px 20px;
//   background-color: #fff;
//   border-radius: 30px;
//   border-color: transparent;
//   width: 300px;
//   margin-right: auto;
//   margin-left: auto;
// `;
// export const Text = styled.p`
//   font-family: "GreyQo-Regular";
//   font-size: 30px;
// `;

import styled from "styled-components";
export const ContactForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.input`
  border-radius: 100%;
  height: 300px;
  width: 300px;
  text-align: center;
  outline: none;
  border: none;
  padding: 0;
  transition-property: transform, background-image color;
  transition-duration: 1000ms;
  &::placeholder {
    color: #000;
  }
  &:hover {
    border: flex;
    transform: scale(1.2);
    background-image: linear-gradient(
      to right,
      #fc00ff 0%,
      #00dbde 51%,
      #fc00ff 100%
    );

    &::placeholder {
      color: #fff;
    }
  }
`;

export const Button = styled.button`
  padding: 12px;
  background-color: #fff;
  border: none;
  width: 300px;
  border-radius: 100%;
  height: 300px;
`;
