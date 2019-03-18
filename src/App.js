import React, { Component } from 'react';
import ButtonAppBar from './components/AppNavigation';
import './App.css';
import Appcards from './components/Appcards';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonAppBar />
        <Appcards />
        <Appcards />
        <Appcards />

      </div>
    );
  }
}

export default App;
