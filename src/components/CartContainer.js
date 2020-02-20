import React, { Component } from 'react';
import ItemCardSimplified from './ItemCardSimplfied'

export default class CartContainer extends Component {
  render() {
    return (
        <div>
            <h1>Cart</h1>
            <button className="item-button" onClick={() => this.props.checkout(this.props.items)}>Place Order</button>
            <div className="cart-container">
                {
                    this.props.items.map(item => <ItemCardSimplified item={item}/>)
                }
            </div>
        </div>
    );
  }
}
