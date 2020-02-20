import React, { Component } from 'react';
import OrderComponent from './OrderComponent'

export default class OrderContainer extends Component {
  render() {
    return (
        <div>
            <h1>Past Orders</h1>
            <div className="orders-container">
                {
                    this.props.orders.map((order, index) => <OrderComponent number={index + 1} order={order}/>)
                }
            </div>
        </div>
    );
  }
}
