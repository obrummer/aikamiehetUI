import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppNavigation from './components/navigation/AppNavigation';
import HomeView from './components/HomeView';
import HumRecord from './components/humcomponents/HumRecord';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <AppNavigation />
                <Router>
                    <Switch>
                        <Route exact path="/" component={HomeView} />
                        <Route exact path="/humrecord" component={HumRecord} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
