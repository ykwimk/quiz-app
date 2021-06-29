import React from 'react';
import Store from './store';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <Store>
      <Wrapper />
    </Store>
  );
}

export default App;
