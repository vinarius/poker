import React, { useEffect, useState } from 'react';
import './App.css';
import { StateProvider } from './components/StateProvider/stateProvider';
import { SmallTable } from './components/Table/small';

const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

const [tableSize, setTableSize] = useState();

/* 
break points for viewport width
320 - 500
501 - 768
769 - ?
*/

useEffect(() => {

}, []);


function App() {
  return (
    <StateProvider>
      <div className="App">
        <SmallTable />
      </div>
    </StateProvider>
  );
}

export default App;
