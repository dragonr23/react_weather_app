import React, { Component } from 'react';

import './index.css';


class WeatherInfo extends Component {
  render(){
    let data = this.props.data;

    return (
      <div className="row">
        <div className="col-md-12">
      {/*JSX is the if statement. was an empty array before this. div tags needed because JSX can only return one element*/}
          {data.name &&
            <div>
            <h3>City: {data.name}</h3>
            <h3>Country: {data.sys.country}</h3>
            <h3>Temperature: {data.main.temp}&deg;</h3>
            <h3>Humidity: {data.main.humidity}%</h3>
            <h3>Description: {data.weather[0].description}</h3>
            <h3></h3>
            </div>
          }

          {/* error message will appear if they put in a city that doesnt exist*/}

          {
            data.cod ==='404' &&
            <h3> Error {data.message}</h3>
          }
        </div>


      </div>
    );
  }
}

export default WeatherInfo;
