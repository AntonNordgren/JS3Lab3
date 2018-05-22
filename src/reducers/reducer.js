
import {combineReducers} from 'redux';

let dataReducer = (state=100, action) => {
	switch( action.type ) {
		default:
			return state;
	}
}

let rootReducer = combineReducers({
    products: dataReducer
});

export default rootReducer;