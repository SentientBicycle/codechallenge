import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Course from "../Courses/Course";
import Courses from "../Courses/Courses";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Courses} />
            <Route exact path="/codechallenge" component={Courses} />
            <Route
              exact
              path="/codechallenge/:courseid/:coursename"
              component={Course}
            />
            <Route exact path="/:courseid/:coursename" component={Course} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
