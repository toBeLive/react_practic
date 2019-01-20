import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render () {
        return (
            <div className = 'App'>
                <header className = 'App-header'>
                    <img alt = 'logo' className = 'App-logo' src = { logo } />
                    <p>hello word!</p>
                    <p>Learn React</p>
                </header>
            </div>
        );
    }
}

export default App;
