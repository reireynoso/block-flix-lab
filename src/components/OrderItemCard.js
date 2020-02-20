import React, { Component } from 'react';

export default class OrderItemCard extends Component {
  render() {
    return (
    <div className="item-card-simplified">
        <div>
          <img className="item-card-simplified-image" src={this.props.item.image_url}/>
          <p>{this.props.item.name}</p>
        </div>
    </div>
    );
  }
}
