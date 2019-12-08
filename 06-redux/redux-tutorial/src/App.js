import React from 'react';
import './App.css';
import SendMessage from './components/SendMessage/SendMessage';
import RecieveMessage from './components/RecieveMessage/RecieveMessage';
import TodoList from './components/TodoList/TodoList';


function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <SendMessage />
          </div>

          <div className="col-6">
            <RecieveMessage />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <TodoList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
