import React from 'react';
import './App.css';
import Header from './components/Header'
import MainContainer from './components/MainContainer'

class App extends React.Component {
  state = {
    items: []
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
        <Header/>
        <MainContainer items={this.state.items}/>
      </div>
    );
  }
}

export default App;
