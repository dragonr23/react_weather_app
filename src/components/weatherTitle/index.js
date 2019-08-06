import React, { Component } from 'react';

import './index.css';
import { Switch, Route } from 'react-router-dom';


class WeatherTitle extends Component {
  render(){
    return (
      <div className="WeatherTitle">
        <h1>Check the Weather!</h1>


      </div>
    );
  }
}

export default WeatherTitle;
