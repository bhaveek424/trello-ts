import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { DndProvider } from "react-dnd";
import { HTML5Backend as Backend } from "react-dnd-html5-backend";
import { AppStateProvider } from "./state/AppStateContext";
import { Action } from "./state/actions";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <DndProvider backend={Backend}>
      <AppStateProvider
        lists={[]}
        getTasksByListId={function (
          id: string
        ): { id: string; text: string }[] {
          throw new Error("Function not implemented.");
        }}
        dispatch={function (value: Action): void {
          throw new Error("Function not implemented.");
        }}
        draggedItem={null}
      >
        <App />
      </AppStateProvider>
    </DndProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
