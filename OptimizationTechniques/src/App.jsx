import { useState } from 'react';
import { log } from './log.js';
import Header from './components/Header.jsx';
import ConfigureCounter from './components/Counter/ConfigureCounter.jsx';
import Counter from './components/Counter/Counter.jsx';

function App() {
  log('<App /> rendered');


  const [chosenCount, setChosenCount] = useState(0);

  function handleSet(value) {
    setChosenCount(value)
  }



  return (
    <>
      <Header />
      <main>
        <ConfigureCounter setCounter={handleSet} />
        <Counter initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
