
import { combineReducers } from 'redux';

const productsReducer = (state = [], action) => {
	switch (action.type) {
		default:
			return state;
	}
}

const changeViewReducer = (state = {}, action) => {
	console.log(action);
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
	console.log(action)
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
				if(newState.quantity === 0) {
					return state.filter( x => x !== state[index]);
				}
				else 
					return state.map(x => x === state[index] ? newState : x);
			}

		default:
			return state;
	}

}

let rootReducer = combineReducers({
	products: productsReducer,
	view: changeViewReducer,
	totalPrice: priceReducer,
	cartList: cartListReducer,

});

export default rootReducer;