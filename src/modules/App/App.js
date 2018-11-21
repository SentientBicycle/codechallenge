import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Main from '../Main/Main';
import Course from '../Courses/Course';
import { Switch, Route } from 'react-router-dom'

class App extends Component {

  render() {

    return (
      <div className="App">
        <Header/>
        <main>
          <Switch>
            <Route exact path='/' component={Main}/>
            <Route exact path='/:courseid/:coursename' component={Course}/>
          </Switch>
        </main>
      </div>
    );
  }
}


export default App;
