import React from 'react';
import Login from './components/Login/LoginClass';
import LoginFunc from './components/Login/LoginFunc';
import LoginClassControlled from './components/Login/LoginClassControlled';
import './App.css';
import Contact from './components/Contact/Contact';
import LoginFormik from './components/Login/LoginFormik';

function App() {
  return (
    <div className="App">
      <div className="container mt-5">
        <div className="row">
          <div className="col-6">
            <Login />

            <LoginFunc />

            <LoginClassControlled />

            <Contact title="contact us" />

            <h1>Login With Validation</h1>

            <LoginFormik />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
