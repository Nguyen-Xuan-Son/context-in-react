import {
  DECREMENT_COUNT,
  INCREMENT_COUNT,
  RESET_COUNT
} from "./constants";

export const decrementCount = () => ({
  type: DECREMENT_COUNT
});

export const incrementCount = () => ({
  type: INCREMENT_COUNT
});

export const resetCount = () => ({
  type: RESET_COUNT
});
