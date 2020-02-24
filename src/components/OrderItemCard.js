import React, { Component } from 'react';

export default class OrderItemCard extends Component {
  render() {
    const {image_url, name} = this.props.item
    return (
    <div className="item-card-simplified">
        <div>
          <img className="item-card-simplified-image" src={image_url} alt={name}/>
          <p>{name}</p>
        </div>
    </div>
    );
  }
}
