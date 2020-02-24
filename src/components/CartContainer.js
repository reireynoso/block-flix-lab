import React, { Component } from 'react';
import CartCard from './CartCard'

export default class CartContainer extends Component {
  render() {

    return (
        <div>
            <h1>Cart</h1>
            <div>
                <button className="cart-button">Place Order</button>
                <div className="cart-container">
                
                    <CartCard />
                
                </div>
            </div>
            
        </div>
    );
  }
}
