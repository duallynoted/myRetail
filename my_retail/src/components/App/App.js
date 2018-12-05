import React, { Component } from 'react';
import '../App/App.css';
import HomePage from '../HomePage/HomePage';
import NinjaBlender from '../NinjaBlender/NinjaBlender';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage />
        <NinjaBlender />
      </div>
    );
  }
}

export default App;
