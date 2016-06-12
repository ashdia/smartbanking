import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

@connect(state => ({
	home: state.home
}))

export default class Home extends React.Component {
	static propTypes = {
		test: PropTypes.string
	};

	componentWillMount() {
	}

	render() {
		return (
			<div>hello</div>
		);
	}
}
