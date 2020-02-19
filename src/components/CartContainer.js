import React, { Component } from 'react';
import ItemCardSimplified from './ItemCardSimplfied'

export default class CartContainer extends Component {
  render() {
    return (
      <div className="cart-container">
          {
              this.props.items.map(item => <ItemCardSimplified item={item}/>)
          }
      </div>
    );
  }
}
