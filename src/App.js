import React, { Component } from 'react';
import './App.css';

import WebStore from './components/WebStore.js';
import Cart from './components/Cart.js';

class App extends Component {
    render() {
        return (
            <div>
                <WebStore />
            </div>
        );
    }
}

export default App;
