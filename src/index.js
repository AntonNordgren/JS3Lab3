import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers/reducer.js';

let initialState = {
    view: "products",
    products: [
        {
            name: "Cola",
            price: 10,
            img: 'https://images-na.ssl-images-amazon.com/images/I/81mEIp4PMBL._SL1500_.jpg'
        },
        {
            name: "Sprite",
            price: 10,
            img: 'https://officedepot.scene7.com/is/image/officedepot/208255_p?$OD%2DLarge$&wid=450&hei=450'
        },
        {
            name: "Cola",
            price: 10,
            img: 'https://images-na.ssl-images-amazon.com/images/I/81mEIp4PMBL._SL1500_.jpg'
        },
        {
            name: "Sprite",
            price: 10,
            img: 'https://officedepot.scene7.com/is/image/officedepot/208255_p?$OD%2DLarge$&wid=450&hei=450'
        },
        {
            name: "Sprite",
            price: 10,
            img: 'https://officedepot.scene7.com/is/image/officedepot/208255_p?$OD%2DLarge$&wid=450&hei=450'
        },
        {
            name: "Cola",
            price: 10,
            img: 'https://images-na.ssl-images-amazon.com/images/I/81mEIp4PMBL._SL1500_.jpg'
        },
        {
            name: "Sprite",
            price: 10,
            img: 'https://officedepot.scene7.com/is/image/officedepot/208255_p?$OD%2DLarge$&wid=450&hei=450'
        }
    ],
};

const store = createStore(rootReducer, initialState);

ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
