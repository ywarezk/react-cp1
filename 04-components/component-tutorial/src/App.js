import React, {useState} from 'react';
import './App.css';
import HelloFunc from './components/Hello/HelloFunc';
import HelloClass from './components/Hello/HelloClass';
import CountdownClass from './components/Countdown/CountdownClass';

function App() {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <div className="App">
      <HelloFunc name={'Yariv Katz'} age={10} myArray={[1,2,3]} />

      <HelloClass nameUser="Idan" />

      {
        isVisible && <CountdownClass start={5} destroyCb={setIsVisible} />
      }
      
      {/* <CountdownClass start={3} /> */}
    </div>
  );
}

export default App;
