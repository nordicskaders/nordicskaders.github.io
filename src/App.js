import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import LandingPage from './components/LandingPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="routerWrap">
          <Nav />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route render={() => (<div>Page not found. </div>)} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
