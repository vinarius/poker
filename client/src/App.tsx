import React from 'react';

import './reset.css';
import 'primereact/resources/themes/vela-green/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import {StateProvider} from './components/StateProvider/stateProvider';
import {Container} from './components/container';

document.title = 'Poker';

export const App = () => {
  return (
    <StateProvider>
      <Container />
    </StateProvider>
  );
}
