import React, { Component } from 'react';
import ProductsTable from '../../components/productsTable';
import ProductsCart from '../../components/productsCart';
import './index.css';
import firebase from '../../firebase';


// let products = [
//   {
//     'id': 1,
//     'name': 'Hat',
//     'price': 19.99
//   },
//   {
//     'id': 2,
//     'name': 'Shirt',
//     'price': 10.95
//   }

// ]

class Commerce extends Component {
  constructor() {
    super();

    this.state = {
      'products': [],
      'cart': []
    }
    //upload products to firebase for reference
    //only need to do this once, to add or remove products, must create a method to do so.

    // firebase.database().ref('products').set(products);

  }

  componentWillMount() {
    // this.setState({ products });

    //load products from firebase and set into local state

    const db_products = firebase.database().ref('products');
    const db_cart = firebase.database().ref('cart');


    //loopp through the db cart and update locat setState

    db_cart.on('value', response => {
      let data = response.val();

      console.log(data);

      let cart =[];

      for (let i in data) {
        cart.push(data[i]);
      }

      this.setState({ cart })

    })



    //loop through the database table-responsive

    db_products.on('value', response => {
      let data = response.val();

      this.setState({ 'products' : data })


    });
  }

  addItem = id => {
    let products = this.state.products;
    let cart = this.state.cart;

    for (let i in products) {
      if (products[i].id == id) {
        cart.push(products[i]);
        break;

      }
    }


    //set the state with updated values
    this.setState({ cart });

    ///update cart on firebase

    firebase.database().ref('cart').set(cart);
  }

  removeItem = id => {
    let cart = this.state.cart;

    for (let i in cart) {
      if (cart[i].id == id) {
        cart.splice(i, 1);
        break;
      }
    }

    this.setState({ cart })

    firebase.database().ref('cart').set(cart);
  }

  render(){
    console.log(this.state.cart);
    return (

      <div className="container">
        <h1>Company Products</h1>

        <ProductsTable products={this.state.products} addItem={this.addItem}/>
        <h1>Shopping Cart</h1>
        <ProductsCart
          cart={this.state.cart}
          removeItem={this.removeItem}/>
      </div>

    );
  }
}

export default Commerce;
