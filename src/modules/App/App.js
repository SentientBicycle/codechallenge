import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Main from '../Main/Main';
import { Switch, Route } from 'react-router-dom'

class App extends Component {

  render() {

    return (
      <div className="App">
        <Header/>
        <main>
          <Switch>
            <Route exact path='/' component={Main}/>
          </Switch>
        </main>
      </div>
    );
  }
}


export default App;
