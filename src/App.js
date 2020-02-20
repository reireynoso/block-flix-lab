import React from 'react';
import './App.css';
import Header from './components/Header'
import MainContainer from './components/MainContainer'

class App extends React.Component {
  state = {
    items: [],
    orders: [],
    header: ""
  }

  checkOut = (items) => {
    this.setState({
      orders: [...this.state.orders, items]
    })
  }

  clickHeader = (val) => {
    this.setState({
      header: val
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
        <Header clickHeader={this.clickHeader}/>
        <MainContainer orders={this.state.orders} checkout={this.checkOut} header={this.state.header} items={this.state.items}/>
      </div>
    );
  }
}

export default App;
