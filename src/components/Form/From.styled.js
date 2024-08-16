import styled from "styled-components";
export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 900px) {
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
`;

export const Input = styled.input`
  border-radius: 15px;
  padding: 12px 24px;
  border: none;
  outline: none;
  transform: none;
  margin-bottom: 20px;
  @media screen and (min-width: 900px) {
    margin-bottom: 0px;
    border-radius: 100%;
    height: 300px;
    width: 300px;
    text-align: center;
    padding: 0;
    transition-property: transform, background-image color;
    transition-duration: 1000ms;
    &:hover {
      border: flex;
      transform: scale(1.2);
      background-image: linear-gradient(
        to right,
        #fc00ff 0%,
        #00dbde 51%,
        #fc00ff 100%
      );
    }
    &::placeholder {
      color: #fff;
    }
  }

  &::placeholder {
    color: #000;
  }
`;

export const Button = styled.button`
  border-radius: 20px;
  padding: 12px;
  background-color: #fff;
  border: none;
  @media screen and (min-width: 900px) {
    width: 300px;
    border-radius: 100%;
    height: 300px;
  }
`;
