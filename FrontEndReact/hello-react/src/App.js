import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Catalog from './Catalog';
import './Catalog.css'
import About from './About';
import WineMakers from './WineMakers';

import {Switch, Route, Link} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The Wine App</h1>
          <nav>
            <ul>
              <li><Link to='/'>Catalog</Link></li>
              <li><Link to='/winemakers'>Wine Makers</Link></li>
              <li><Link to='/about'>About us</Link></li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path='/' component={Catalog} />
          <Route path='/winemakers' component={WineMakers} />
          <Route exact path='/about' component={About} />
        </Switch>
      </div>

    );
  }
}

export default App;
