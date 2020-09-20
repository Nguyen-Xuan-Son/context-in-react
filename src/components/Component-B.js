import React, { useContext } from 'react';
import {CountContext} from '../contexts/count-context';

function ComponentB() {
  const {state} = useContext(CountContext);

  return (
    <div>
      ComponentB:
      <div>Count: {state.count}</div>
      <hr />
    </div>
  );
}

export default ComponentB;
