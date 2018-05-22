
import {combineReducers} from 'redux';

let dataReducer = (state=[], action) => {
	switch( action.type ) {
		default:
			return state;
	}
}

let rootReducer = combineReducers({
    products: dataReducer
});

export default dataReducer;