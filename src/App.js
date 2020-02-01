import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import './App.css';

const HatsPage = () => (
    <div>
        <h1>HATS PAGE</h1>
    </div>
);

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/hats' component={HatsPage} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
