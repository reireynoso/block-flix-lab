import React, { Component } from 'react';

export default class ItemCardSimplified extends Component {
  render() {
    return (
      <div className="item-card-simplified">
          <div>
            <img className="item-card-simplified-image" src={this.props.item.image_url}/>
            <p>{this.props.item.name}</p>
          </div>
          <button className="item-card-simplified-button">Remove from Cart</button>
      </div>
    );
  }
}
