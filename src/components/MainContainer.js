import React, { Component } from 'react';
import ItemsContainer from './ItemsContainer'
import OrderContainer from './OrderContainer'
import CartContainer from './CartContainer'

export default class MainContainer extends Component {


  render() {
    return (
      <div className="main-component">   
            <CartContainer />
            <OrderContainer />
            <ItemsContainer />
      </div>
    );
  }
}
