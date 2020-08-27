import React from 'react';
import './reset.css';
import './App.css';
import { StateProvider } from './components/StateProvider/stateProvider';
import { Table } from './components/Table/table';

function App() {
  return (
    <StateProvider>
      <div className="App">
        <Table />
      </div>
    </StateProvider>
  );
}

export default App;
