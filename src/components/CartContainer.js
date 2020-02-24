import React, { Component } from 'react';
import CartCard from './CartCard'

export default class CartContainer extends Component {
  render() {
    const {checkout, cart, handleRemoveFromCart} = this.props
    return (
        <div>
            <h1>Cart</h1>
            {
                this.props.cart.length !== 0 ? 
                <div>
                     <button className="cart-button" onClick={() => checkout(cart)}>Place Order</button>
                     <div className="cart-container">
                        {
                            cart.map(item => <CartCard 
                                key={item.id}
                                item={item}
                                handleRemoveFromCart={handleRemoveFromCart}
                            />)
                        }
                    </div>
                </div>
                :
                <h3>No items in cart</h3>
            }
        </div>
    );
  }
}
