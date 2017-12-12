import React, { Component } from 'react';
import './App.css';
import Board from './board/board';

class App extends Component {


    render() {
        return (
            <div className="container-fluid App">
                <Board />
            </div>
        );
    }
}

export default App;
