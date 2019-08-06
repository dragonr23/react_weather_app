import React, { Component } from 'react';

import './App.css';
import { Switch, Route } from 'react-router-dom';
import Weather from './views/weather';
import Header from './components/header';


class App extends Component {
  render(){
    return (
      <div className="App">
        <Header />

        <div className="container">
          <Switch>
            <Route exact path='/' render={() => <Weather />}/>
            <Route exact path='/racer' render={() => <h1>Render another racer component here</h1>}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
