import React from 'react';
import './App.css';
import Header from './components/Header'
import MainContainer from './components/MainContainer'

class App extends React.Component {
  state = {
    items: [],
    orders: [],
    cart: [],
    header: "items",
    selectedCategory: "all",
    searchFilter: "",
    categories: []
  }

  render(){
    return (
      <div className="App">
        <Header />
        <MainContainer />
      </div>
    );
  }
}

export default App;
