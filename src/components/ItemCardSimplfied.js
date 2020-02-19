import React, { Component } from 'react';

export default class ItemCardSimplified extends Component {
  render() {
    return (
      <div className="item-card-simplified">
          <p>{this.props.item.name}</p>
          <button className="item-card-simplified-button">Remove from Cart</button>
      </div>
    );
  }
}
