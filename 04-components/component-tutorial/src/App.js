import React, {useState} from 'react';
import './App.css';
import HelloFunc from './components/Hello/HelloFunc';
import HelloClass from './components/Hello/HelloClass';
import CountdownClass from './components/Countdown/CountdownClass';
import TodoList from './components/TodoList/TodoList';
import CountdownFunc from './components/Countdown/CountdownFunc';

function App() {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <div className="App">
      <HelloFunc name={'Yariv Katz'} age={10} myArray={[1,2,3]} />

      <HelloClass nameUser="Idan" />

      {
        /*isVisible && <CountdownClass start={5} destroyCb={setIsVisible} />*/
      }

      {
        isVisible && <CountdownFunc start={3} destroyCb={setIsVisible} />
      }
      
      
      {/* <CountdownClass start={3} /> */}


      {/* <TodoList /> */}
    </div>
  );
}

export default App;
