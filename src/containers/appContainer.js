import React, { Component, PropTypes } from 'react';

export default class AppContainer extends Component {
	static propTypes = {
		children: PropTypes.any
	};

	render() {
		const { children } = this.props;

		return (
			<div>
				{children}
			</div>
		);
	}
}
