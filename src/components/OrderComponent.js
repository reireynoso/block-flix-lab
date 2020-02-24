import React, { Component } from 'react';
import OrderItemCard from './OrderItemCard'

export default class OrderComponent extends Component {
  render() {
    const {number, order} = this.props
    return (
      <div className="order-component">
          <h3>Order Number {number}</h3>
          <div className="order-item">
            {
                order.map(item => <OrderItemCard item={item}/>)
            }
          </div>
          
      </div>
    );
  }
}
