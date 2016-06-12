import { createStore, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistory } from 'react-router-redux';
import promise from 'redux-promise';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers';

const logger = createLogger({
	collapsed: true,
	predicate: () =>
		process.env.NODE_ENV === `development` // eslint-disable-line no-unused-vars
});

const reduxRouterMiddleware = syncHistory(browserHistory);

const createStoreWithMiddleware = applyMiddleware(
	thunkMiddleware,
	logger,
	reduxRouterMiddleware,
	promise
)(createStore);

function configureStore(initialState) {
	const store = createStoreWithMiddleware(rootReducer, initialState);

	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('./reducers', () => {
			const nextRootReducer = require('./reducers/index').default;
			store.replaceReducer(nextRootReducer);
		});
	}

	return store;
}

export const store = configureStore();
