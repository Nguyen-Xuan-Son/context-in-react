import React, { useReducer } from 'react';
import { reducer } from './reducer';
import {
  decrementCount,
  incrementCount,
  resetCount
} from './actions';

export const CountContext = React.createContext();

const initState = {
  count: 0
};

export function CountProvider(props) {
  const [state, dispatch] = useReducer(reducer, initState);
  const value = { state, dispatch };

  return (
    <CountContext.Provider
      value={value}
    >
        {props.children}
    </CountContext.Provider>
  );
};

export {
  decrementCount,
  incrementCount,
  resetCount
}
