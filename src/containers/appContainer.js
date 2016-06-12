import React, { Component, PropTypes } from 'react';
import AppHeader from '../components/appHeaderComponent';
import { connect } from 'react-redux';

@connect(
	state => ({
		routing: state.routing,
		appHeader: state.appHeader,
	})
)

export default class AppContainer extends Component {
	static propTypes = {
		appHeader: PropTypes.object,
		routing: PropTypes.object,
		children: PropTypes.any
	};

	render() {
		const { routing, children } = this.props;

		return (
			<div>
				<div>
					<AppHeader pathName={routing.location.pathname} />
				</div>
				<div>
					{children}
				</div>
			</div>
		);
	}
}
