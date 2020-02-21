import React, { Component } from 'react';

export default class SortComponent extends Component {
  render() {
    return (
      <div>
          <select onChange={(e) => this.props.handleSelectedCategory(e.target.value)}>
              <option value="all">All</option>
              {
                this.props.categories.map(category => <option value={category}>{category}</option>)
              }
          </select>
      </div>
    );
  }
}
