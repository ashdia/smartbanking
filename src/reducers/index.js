import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import { home } from './homeReducer';

const rootReducer = combineReducers({
	routing: routeReducer,
	/* our reducers */
	home
});

export default rootReducer;
