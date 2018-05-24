
import { combineReducers } from 'redux';

let productsReducer = (state = [], action) => {
	switch (action.type) {
		default:
			return state;
	}
}

let changeViewReducer = (state = {}, action) => {
	switch (action.type) {
		case 'CHANGE_VIEW':
			if (state == 'products')
				return state = 'cart'
			else if (state == 'cart')
				return state = 'products'
		default:
			return state;
	}
}

let rootReducer = combineReducers({
	products: productsReducer,
	view: changeViewReducer
});

export default rootReducer;