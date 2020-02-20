import React, { Component } from 'react';
import ItemsContainer from './ItemsContainer'
import OrderContainer from './OrderContainer'
import CartContainer from './CartContainer'

export default class MainContainer extends Component {

    renderWhat = () => {
        if(this.props.header === "cart"){
            return <CartContainer checkout={this.props.checkout} items={this.props.items}/>
        }
        else if(this.props.header === "order"){
            return <OrderContainer orders={this.props.orders}/>
        }
        else{
            return <ItemsContainer items={this.props.items}/>
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
