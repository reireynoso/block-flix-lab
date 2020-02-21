import React, { Component } from 'react';
import CartCard from './CartCard'

export default class CartContainer extends Component {
  render() {
    return (
        <div>
            <h1>Cart</h1>
            <button className="cart-button" onClick={() => this.props.checkout(this.props.items)}>Place Order</button>
            <div className="cart-container">
                {
                    this.props.items.map(item => <CartCard item={item}/>)
                }
            </div>
        </div>
    );
  }
}
