import React, { useContext } from 'react';
import {
  changeTitle,
  deleteTitle,
  TitleContext
} from '../contexts/title-context';

function ComponentC() {
  const {state, dispatch} = useContext(TitleContext);

  return (
    <div>
      ComponentC
      <div>
        <input
          onChange={e => dispatch(changeTitle(e.target.value))}
          value={state.title}
        />
        <button onClick={() => dispatch(deleteTitle())}>Delete title</button>
      </div>
    </div>
  );
}

export default ComponentC;
