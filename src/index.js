import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/reducer.js';

let initialState = {
    view: "products",
    products: [
        {
            name: "Mario's Mushroom Soda",
            price: 9.9,
            img: 'https://i.imgur.com/ls8dALW.png'
        },
        {
            name: "Pika's volt Cola",
            price: 9.9,
            img: 'https://i.imgur.com/gHxzx3h.png'
        },
        {
            name: "Pac man's lemonade",
            price: 9.9,
            img: 'https://i.imgur.com/mBYeTPJ.png'
        },
        {
            name: "The Grim Fandango Lemonade",
            price: 9.9,
            img: 'https://i.imgur.com/wpMi9nQ.png'
        },
        {
            name: "Worms Bazooka Cola",
            price: 9.9,
            img: 'https://i.imgur.com/YXVifZo.png'
        },
        {
            name: "The Hidden Ones Lemonade",
            price: 9.9,
            img: 'https://i.imgur.com/fXotfH3.png'
        },
        {
            name: "Rebel Cola",
            price: 9.9,
            img: 'https://i.imgur.com/HQddm1k.png'
        },
        {
            name: "Imperial Cola",
            price: 9.9,
            img: 'https://i.imgur.com/TO7KQK7.png'
        },
        {
            name: "Sith Cola",
            price: 9.9,
            img: 'https://i.imgur.com/r8UAjDE.png'
        },
        {
            name: "Jedi Orange",
            price: 9.9,
            img: 'https://i.imgur.com/xWvkyaX.png'
        },
        {
            name: "Mana Potion",
            price: 19.9,
            img: 'https://i.imgur.com/YwoUhT3.png'
        },
        {
            name: "Harry Potters Poly Juice Soda",
            price: 19.9,
            img: 'https://i.imgur.com/BOPxLHl.png'
        },
        {
            name: "Avengers Fruity Fuzz",
            price: 19.9,
            img: 'https://i.imgur.com/p2AuycU.png'
        }
    ],
    totalPrice: 0,
    cartList: []
};

const store = createStore(rootReducer, initialState);

ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
