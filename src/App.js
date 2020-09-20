import React from 'react';

import ComponentA from './components/Component-A';
import ComponentB from './components/Component-B';
import ComponentC from './components/Component-C';
import StoreProvider from './contexts';

function App() {
  return (
    <div>
      <StoreProvider>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </StoreProvider>
    </div>
  );
}

export default App;
