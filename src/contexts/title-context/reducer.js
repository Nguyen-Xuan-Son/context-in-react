import {
  CHANGE_TITLE,
  DELETE_TITLE,
} from "./constants";

export const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_TITLE:
      return {title: action.payload};
    case DELETE_TITLE:
      return {title: ''};
    default:
      break;
  };
};
  