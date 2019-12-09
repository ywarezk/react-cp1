import React, {Suspense} from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch, Link} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Error404 from './components/Error404';
// import Settings from './components/Settings';

// Promise<{default: () => ...}>


const LazySettings = React.lazy(() => import('./components/Settings'));

function App() {
  return (
    <div className="App">

      <Link to="/about">About</Link>
      <Link to="/">Homepage</Link>
      <Link to="/settings">settings</Link>
      
      <Suspense fallback={<div>Loading...</div>}>

      

      <Switch>
        <Route path="/About" exact>
          <About />
        </Route>
        <Route path="/About/:hello" exact>
          <About />
        </Route>
        <Route path="/settings" exact>
          <LazySettings />
        </Route>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="**">
          <Error404 />
        </Route>`
      </Switch>

      </Suspense>
      

    </div>
  );
}

export default App;
