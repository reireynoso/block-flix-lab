import React, { Component } from 'react';
import CartCard from './CartCard'

export default class CartContainer extends Component {
  render() {
    return (
        <div>
            <h1>Cart</h1>
            <button className="cart-button" onClick={() => this.props.checkout(this.props.cart)}>Place Order</button>
            <div className="cart-container">
                {
                    this.props.cart.map(item => <CartCard 
                        key={item.id}
                        item={item}
                        handleRemoveFromCart={this.props.handleRemoveFromCart}
                    />)
                }
            </div>
        </div>
    );
  }
}
