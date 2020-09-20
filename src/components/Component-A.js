import React, { useContext } from 'react';
import { 
  CountContext,
  decrementCount,
  incrementCount,
  resetCount
} from '../contexts/count-context';
import { TitleContext } from '../contexts/title-context';

function ComponentA() {
  const {dispatch} = useContext(CountContext);
  const {state} = useContext(TitleContext);

  return (
    <div>
      ComponentA
      <div>Title: {state.title}</div>
      <div>
        <button onClick={() => dispatch(decrementCount())}>Decrement</button>
        <button onClick={() => dispatch(incrementCount())}>Increment</button>
        <button onClick={() => dispatch(resetCount())}>Reset</button>
      </div>
      <hr />
    </div>
  );
}

export default ComponentA;
