
import { combineReducers } from 'redux';

const productsReducer = (state = [], action) => {
	let indexOf = (name) => {
		for (let i = 0; i < state.length; i++) {
			if (state[i].name === name) {
				return i;
			}
		}
		return -1;
	}

	switch (action.type) {
		case 'ADD_NEW_PRODUCT':
			if(indexOf(action.payload.name) === -1) {
				return [...state, action.payload];
			}
			return state;
		case 'DELETE_EXISTING_PRODUCT':
			let index = indexOf(action.name);
			return state.filter( x => x !== state[index]);
		default:
			return state;
	}
}

const changeViewReducer = (state = {}, action) => {
	switch (action.type) {
		case 'CHANGE_VIEW':
			return state = action.view;
			break;
		default:
			return state;
	}
}

const priceReducer = (state = {}, action) => {
	switch (action.type) {
		case 'MODIFY_CART':
			return state + action.payload.price * action.payload.quantity;
		default:
			return state;
	}
}

const cartListReducer = (state = [], action) => {
	console.log(state);
	let indexOf = () => {
		for (let i = 0; i < state.length; i++) {
			if (state[i].name === action.payload.name) {
				return i;
			}
		}
		return -1;
	}

	switch (action.type) {
		case 'MODIFY_CART':
			let index = indexOf();
			if (index === -1) 
				return [...state, action.payload];
			else {
				let newState = Object.assign({}, state[index]);
				newState.quantity += action.payload.quantity;
				if(newState.quantity === 0)
					return state.filter( x => x !== state[index]);
				else 
					return state.map(x => x === state[index] ? newState : x);
			}

		default:
			return state;
	}
}

const historyReducer = (state = [], action) => {
	return [...state, action];
}

let rootReducer = combineReducers({
	products: productsReducer,
	view: changeViewReducer,
	totalPrice: priceReducer,
	cartList: cartListReducer,
	historyList: historyReducer
});

export default rootReducer;