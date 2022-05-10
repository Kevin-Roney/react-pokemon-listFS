import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import PokeHome from './PokeHome';
import PokeDetail from './PokeDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <PokeHome />
          </Route>
          <Route path='/pokemon/:id'>
            <PokeDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
