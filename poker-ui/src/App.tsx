import React from 'react';
import './reset.css';
import { StateProvider } from './components/StateProvider/stateProvider';
import { Container } from './components/container';

function App() {

  return (
    <StateProvider>
      <Container />
    </StateProvider>
  );
}

export default App;
