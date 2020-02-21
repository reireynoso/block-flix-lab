import React, { Component } from 'react';
import SortComponent from './SortComponent'
import FilterComponent from './FilterComponent'

export default class FilterAndSortComponent extends Component {
  render() {
    return (
      <div className="filter">
          <SortComponent categories={this.props.categories} handleSelectedCategory={this.props.handleSelectedCategory}/>
          <FilterComponent handleSearchFilter={this.props.handleSearchFilter}/>
      </div>
    );
  }
}
