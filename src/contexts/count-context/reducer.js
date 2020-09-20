import {
  DECREMENT_COUNT,
  INCREMENT_COUNT,
  RESET_COUNT
} from "./constants";

export const reducer = (state, action) => {
  switch (action.type) {
    case DECREMENT_COUNT:
      const countDecremented = state.count + 1;
      return {...state, count: countDecremented};
    case INCREMENT_COUNT:
      const countIncremented = state.count - 1;
      return {...state, count: countIncremented};
    case RESET_COUNT:
      return {...state, count: 0};
    default:
      break;
  };
};
