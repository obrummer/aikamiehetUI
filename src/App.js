import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppNavigation from './components/navigation/AppNavigation';
import HomeView from './components/HomeView';
import HumRecord from './components/humcomponents/HumRecord';
import TextTest from './components/textcomponents/TextTest';
import FileTest from './components/filecomponents/FileTest';
import PageNotFound from './components/PageNotFound';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                <AppNavigation />
                    <Switch>
                        <Route exact path="/" component={HomeView} />
                        <Route exact path="/humrecord" component={HumRecord} />
                        <Route exact path="/texttest" component={TextTest} />
                        <Route exact path="/filetest" component={FileTest} />
                        <Route path='**' component={PageNotFound} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
