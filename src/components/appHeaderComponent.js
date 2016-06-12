import React, { PropTypes } from 'react';
import '../styles/components/appHeader';

export default class AppHeader extends React.Component {
	static propTypes = {
		test: PropTypes.string
	};

	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
	}

	render() {
		return (
			<div className="c-app-header-container">
				<div className="c-app-header-container-tabs">
					<div>video</div>
					<div>photo</div>
					<div>politics</div>
					<div>economy</div>
					<div>culture</div>
				</div>
			</div>
		);
	}
}
