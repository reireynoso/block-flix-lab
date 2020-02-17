import React, { Component } from 'react';
import SortComponent from './SortComponent'
import FilterComponent from './FilterComponent'

export default class FilterAndSortComponent extends Component {
  render() {
    return (
      <div className="filter">
          <SortComponent/>
          <FilterComponent/>
      </div>
    );
  }
}
