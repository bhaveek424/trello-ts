import { Action } from "./actions";
import { nanoid } from "nanoid";

export type Task = {
  id: string;
  text: string;
};

export type List = {
  id: string;
  text: string;
  tasks: Task[];
};

export type AppState = {
  lists: List[];
};

export const appStateReducer = (
  draft: AppState,
  action: Action
): AppState | void => {
  switch (action.type) {
    case "ADD_LIST": {
      draft.lists.push({
        id: nanoid(),
        text: action.payload,
        tasks: [],
      });
      break;
    }
  }
  // here we call the state a draft, because we are usign Immer and we'll mutate this object directly
  //this way we remind ourselves that this is not a regular reducer state and we dont have to worry about the immutability
};
