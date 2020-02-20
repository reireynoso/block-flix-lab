import React, { Component } from 'react';
import OrderItemCard from './OrderItemCard'

export default class OrderComponent extends Component {
  render() {
    return (
      <div className="order-component">
          <h3>Order Number {this.props.number}</h3>
          <div className="order-item">
            {
                this.props.order.map(item => <OrderItemCard item={item}/>)
            }
          </div>
          
      </div>
    );
  }
}
