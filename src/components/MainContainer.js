import React, { Component } from 'react';
import ItemsContainer from './ItemsContainer'
import OrderContainer from './OrderContainer'
import CartContainer from './CartContainer'

export default class MainContainer extends Component {

    renderWhat = () => {
        if(this.props.header === "cart"){
            return <CartContainer items={this.props.items}/>
        }
        else if(this.props.header === "order"){
            return <OrderContainer items={this.props.items}/>
        }
        else{
            return <ItemsContainer items={this.props.items}/>
        }
    }
  render() {
    return (
      <div className="main-component">
          <h1>Store Items</h1>
          {
              this.renderWhat()
          }
          
      </div>
    );
  }
}
