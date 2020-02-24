import React, { Component } from 'react';
import ItemsContainer from './ItemsContainer'
import OrderContainer from './OrderContainer'
import CartContainer from './CartContainer'

export default class MainContainer extends Component {

    renderWhat = () => {
        const {header, orders, items, checkout, cart, handleAddToCart, handleRemoveFromCart} = this.props
        if(header === "cart"){
            return <CartContainer 
                checkout={checkout} 
                cart={cart}
                handleRemoveFromCart={handleRemoveFromCart}
            />
        }
        else if(header === "order"){
            return <OrderContainer orders={orders}/>
        }
        else{
            return <ItemsContainer
            cart = {cart}
            items={items}
            handleAddToCart={handleAddToCart}
            />
        }
    }
  render() {
    return (
      <div className="main-component">
          {
              this.renderWhat()
          }
          
      </div>
    );
  }
}
