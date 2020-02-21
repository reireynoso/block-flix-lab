import React from 'react';
import './App.css';
import Header from './components/Header'
import MainContainer from './components/MainContainer'

class App extends React.Component {
  state = {
    items: [],
    orders: [],
    cart: [],
    header: "items"
  }

  checkOut = (items) => {
    this.setState({
      orders: [...this.state.orders, items],
      cart: []
    })
  }

  clickHeader = (val) => {
    this.setState({
      header: val
    })
  }

  handleAddToCart = (item) => {
    this.setState({
      cart: [...this.state.cart, item]
    })
  }

  handleRemoveFromCart = (item) => {
    const removedCart = this.state.cart.filter(cartItem => cartItem.id !== item.id)
    this.setState({
      cart: removedCart
    })
  }
  componentDidMount(){
    fetch(`http://localhost:4000/items`)
    .then(res => res.json())
    .then(items => this.setState({
      items
    }))
  }
  render(){
    return (
      <div className="App">
        <Header header={this.state.header} clickHeader={this.clickHeader}/>
        <MainContainer 
          orders={this.state.orders} 
          checkout={this.checkOut} 
          cart={this.state.cart} 
          header={this.state.header} 
          items={this.state.items}
          handleAddToCart={this.handleAddToCart}
          handleRemoveFromCart={this.handleRemoveFromCart}
        />
      </div>
    );
  }
}

export default App;
