import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Search from './components/Search'

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{color: "white", backgroundColor: "black", height: "2em", top: 0}}>
          <p> Google Books Search</p>
      </header>

      <div>
        <Router >
          <Switch >
          <Route path= '*'>
            <Search />
          </Route>

          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
