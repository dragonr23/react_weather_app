import React, { Component } from 'react';
import './index.css';
import AnimalsTitle from '../../components/animalsTitle';
import AnimalsForm from '../../components/animalsForm';
import AnimalsInfo from '../../components/animalsInfo';


class Animals extends Component {
  constructor(){
    super();

    this.state = {
      'name_data': [],
      'food_likes':'',
      'food_dislikes':''

    }

  }

  getAnimal = async(e) => {
    e.preventDefault();
    // TODO: change the naming attributes

    console.log(e)
    let name = e.target.elements.name.value;

    const URL = 'https://learnwebcode.github.io/json-example/animals-1.json'



    let response = await fetch(URL);



    let data = await response.json();

    var name_data = data.filter(function(d) {
      return d.name == name;
    });


    if (name_data.length > 0) {

      name_data = name_data[0]


      let food_likes = name_data.foods.likes.toString();
      let food_dislikes = name_data.foods.dislikes.toString();

      this.setState({ food_dislikes});
      this.setState({ food_likes })
      this.setState({ name_data });

  }




    }

  render(){
    return (
      <div className="row">
        <div className="col-md-4">
          <AnimalsTitle />
        </div>

        <div className="col-md-8">

        <AnimalsForm getAnimal={this.getAnimal}/>
        <AnimalsInfo name_data={this.state.name_data} food_likes={this.state.food_likes} food_dislikes={this.state.food_dislikes}/>

        </div>

      </div>
    );
  }
}

export default Animals;
