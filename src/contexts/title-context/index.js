import React, { useReducer } from 'react';
import { reducer } from './reducer';
import {
  changeTitle,
  deleteTitle
} from './actions';

export const TitleContext = React.createContext();

const initState = {
  title: "This is default title."
};

export function TitleProvider(props) {
  const [state, dispatch] = useReducer(reducer, initState);
  const value = { state, dispatch };

  return (
    <TitleContext.Provider
      value={value}
    >
        {props.children}
    </TitleContext.Provider>
  );
};

export {
  changeTitle,
  deleteTitle
}
