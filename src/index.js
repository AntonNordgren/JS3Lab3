import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import dataReducer from './reducers/reducer.js';

let initialState = {
    product: [
        {
            name: "Cola",
            price: 13.37,
            img: 'https://images-na.ssl-images-amazon.com/images/I/81mEIp4PMBL._SL1500_.jpg'
        },
        {
            name: "Sprite",
            price: 13.39,
            img: 'https://officedepot.scene7.com/is/image/officedepot/208255_p?$OD%2DLarge$&wid=450&hei=450'
        }
    ]
};

const store = createStore(dataReducer, initialState);

ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
