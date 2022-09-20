import { ColumnContainer, ColumnTitle, CardContainer } from "./styles";

type ColumnProps = {
  text: string;
};

export const Column = ({ text }: ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      <CardContainer>Welcome to my Stream</CardContainer>
      <CardContainer>Lets Learn Together</CardContainer>
      <CardContainer>TypeScript is the way to go</CardContainer>
    </ColumnContainer>
  );
};
