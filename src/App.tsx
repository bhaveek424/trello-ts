import React from "react";
import { AppContainer } from "./styles";
import { Column } from "./Column";

export const App = () => {
  return (
    <AppContainer>
      <Column text="todo" />
    </AppContainer>
  );
};
