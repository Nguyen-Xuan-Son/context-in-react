import {
  CHANGE_TITLE,
  DELETE_TITLE
} from "./constants";

export const changeTitle = payload => ({
  type: CHANGE_TITLE,
  payload
});

export const deleteTitle = () => ({
  type: DELETE_TITLE
});
