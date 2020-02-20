import React, { Component } from 'react';
import ItemCardSimplified from './ItemCardSimplfied'

export default class OrderComponent extends Component {
  render() {
    return (
      <div className="order-component">
          <h3>Order Number {this.props.number}</h3>
          {
              this.props.order.map(item => <ItemCardSimplified item={item}/>)
          }
      </div>
    );
  }
}
