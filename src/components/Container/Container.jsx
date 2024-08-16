import { Wrapper } from "./Container.styled";

export const Container = ({ children, $variant }) => {
  return <Wrapper $variant={$variant}>{children}</Wrapper>;
};
