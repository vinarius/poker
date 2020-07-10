import React, { useEffect, useState } from 'react';
import './reset.css';
import './App.css';
import { StateProvider } from './components/StateProvider/stateProvider';
import { SmallTable } from './components/Table/small';
import { LargeTable } from './components/Table/large';

function App() {
  const getTableSize = () => {
    const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    return viewportWidth <= 768 ? 'small' : 'large';
  };

  const [tableSize, setTableSize] = useState(getTableSize);
  let table = tableSize === 'small' ? <SmallTable /> : <LargeTable />;

  const checkAgainstTableState = () => {
    let newSize = getTableSize();
    if (newSize !== tableSize) {
      setTableSize(newSize);
      table = tableSize === 'small' ? <SmallTable /> : <LargeTable />;
    }
  };

  useEffect(() => {
    window.addEventListener('resize', checkAgainstTableState);

    return () => {
      window.removeEventListener('resize', checkAgainstTableState);
    };
  }, [tableSize]);

  return (
    <StateProvider>
      <div className="App">
        {table}
      </div>
    </StateProvider>
  );
}

export default App;
