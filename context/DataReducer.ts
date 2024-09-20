import { DataState } from "./dataContext";

type ActionsProps =
  | { type: "set_posts"; payload: any[] }
  | { type: "set_messages"; payload: any[] };

export const dataReducer = (
  state: DataState,
  actions: ActionsProps
): DataState => {
  switch (actions.type) {
    case "set_posts":
      return {
        ...state,
        posts: actions.payload,
      };
    case "set_messages":
      return {
        ...state,
        messages: actions.payload,
      };
    default:
      return state;
  }
};
