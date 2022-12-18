import React from "react";
import { AppContainer } from "./styles";
import { Column } from "./components/Column";
import { AddNewItem } from "./components/AddNewItem";
import { useAppState } from "./state/AppStateContext";
import { addList } from "./state/actions";
import { CustomDragLayer } from "./components/CustomDragLayer";

export const App = () => {
  const { lists, dispatch } = useAppState();
  return (
    <>
      <AppContainer>
        <CustomDragLayer />
        {lists.map((list) => (
          <Column text={list.text} id={list.id} key={list.id} />
        ))}
        <AddNewItem
          toggleButtonText="+ Add another list"
          onAdd={(text) => dispatch(addList(text))}
        />
      </AppContainer>
    </>
  );
};
