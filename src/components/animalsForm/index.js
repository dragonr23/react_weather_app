import React, { Component } from 'react';

import './index.css';


class AnimalsForm extends Component {
  render(){
    return (
      <div className="row">
        <div className="col-md-12">
          <form onSubmit={this.props.getAnimal}>
            <input type="text" name="name" placeholder="Name..." />

            <input type="submit" value="GET INFO"/>

          </form>


        </div>
      </div>
    );
  }
}

export default AnimalsForm;
