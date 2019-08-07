import React, { Component } from 'react';

import './index.css';


class AnimalsInfo extends Component {
  render(){
    let name_data = this.props.name_data;
    console.log('Below is data on the otherside');
    console.log(name_data.name)

    let food_likes = this.props.food_likes;
    let food_dislikes = this.props.food_dislikes;


    console.log(food_likes)
    return (
      <div className="row">
        <div className="col-md-12">
      {/*JSX is the if statement. was an empty array before this. div tags needed because JSX can only return one element*/}
          {name_data &&
            <div>
            <h3>Name: {name_data.name}</h3>
            <h3>Species: {name_data.species}</h3>
            <h3>Food Likes: {food_likes}</h3>
            <h3>Food Dislikes: {food_dislikes}</h3>

            </div>

          }


          {/* error message will appear if they put in a city that doesnt exist*/}

          {
            name_data.cod ==='404' &&
            <h3> Error {name_data.message}</h3>
          }
          </div>


      </div>
    );
  }
}

export default AnimalsInfo;
