import React from 'react';
import './App.css';
import Header from './components/Header'
import MainContainer from './components/MainContainer'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Header/>
        <MainContainer/>
      </div>
    );
  }
}

export default App;
