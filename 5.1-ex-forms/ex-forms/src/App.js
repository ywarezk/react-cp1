import React, {useState} from 'react';
import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import TodoList from './components/TodoList/TodoList';
import JwtContext from './contexts/jwt-context';
import Autocomplete from './components/Autocomplete/Autocomplete';

function App() {
  const [token, setToken] = useState(null);

  // const [idanComplex, setIdanComplex] = useState({
  //   token: '...',
  //   idan: 'hello'
  // })

  return (
    <div className="App">
      <div className="container mt-5">

        <JwtContext.Provider value={ {token, setToken, idan: 'hello'} }>
          <div className="row">
            <div className="col-6">
              <Login cb={setToken} />
            </div>

            <div className="col-6">
              <Register cb={setToken} />
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <TodoList token={token} />
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <Autocomplete />
            </div>
          </div>
        </JwtContext.Provider>
        
      </div>
    </div>
  );
}

export default App;
