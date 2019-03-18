import React, { Component } from 'react';
import ButtonAppBar from './components/AppNavigation';
import AppPicture from './components/AppPicture';
import AppCardHum from './components/AppCardHum';
import AppCardText from './components/AppCardText';
import AppCardFile from './components/AppCardFile';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonAppBar />
        <AppPicture />
        <AppCardFile />
        <AppCardHum />
        <AppCardText />

      </div>
    );
  }
}

export default App;
