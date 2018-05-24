
import { combineReducers } from 'redux';

const productsReducer = (state = [], action) => {
	switch (action.type) {
		default:
			return state;
	}
}

const changeViewReducer = (state = {}, action) => {
	switch (action.type) {
		case 'CHANGE_VIEW':
			if (state === 'products')
				return state = 'cart'
			else if (state === 'cart')
				return state = 'products'
		default:
			return state;
	}
}

const priceReducer = (state={}, action) => {
	switch( action.type ) {
		case 'ADD_TO_CART':
			return state + action.payload.price;
		default:
			return state;
	}
}

const cartListReducer = (state=[], action) => {
	switch ( action.type ) {
		case 'ADD_TO_CART':
			return [...state, action.payload.name];
		default:
			return state;
	}
}

let rootReducer = combineReducers({
	products: productsReducer,
	view: changeViewReducer,
	totalPrice: priceReducer,
	cartList: cartListReducer
});

export default rootReducer;