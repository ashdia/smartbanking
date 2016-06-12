import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import Routes from './routes';
import { store } from './store';

export default class App extends Component {
	static propTypes = {
		store: PropTypes.object
	};

	render() {
		return (
			<Provider store={this.props.store}>
				<Router history={browserHistory}>
					{Routes}
				</Router>
			</Provider>
		);
	}
}

ReactDOM.render(<App store={store}/>, document.getElementById('main'));
