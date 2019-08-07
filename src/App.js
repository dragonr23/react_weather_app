import React, { Component } from 'react';

import './App.css';
import { Switch, Route } from 'react-router-dom';
import Weather from './views/weather';
import Header from './components/header';
import Animals from './views/animals';
import Racer from './views/racer';


class App extends Component {
  render(){
    return (
      <div className="App">
        <Header />

        <div className="container">
          <Switch>
            <Route exact path='/' render={() => <Weather />}/>
            <Route exact path='/racer' render={() => <Racer />}/>
            <Route exact path='/animals' render={() => <Animals />}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
