import React, { Component } from 'react';
import ItemsContainer from './ItemsContainer'

export default class MainContainer extends Component {
  render() {
    return (
      <div className="main-component">
          <h1>Component</h1>
          <ItemsContainer items={this.props.items}/>
      </div>
    );
  }
}
