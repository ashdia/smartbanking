import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { ControlPanel, ContactsPanel } from '../components';
import '../styles/containers/home';

@connect(state => ({
	home: state.home
}))

export default class Home extends React.Component {
	static propTypes = {
		home: PropTypes.shape({
			showAddContactModal: PropTypes.bool,
			contacts: PropTypes.array,
			showHistoryIndex: PropTypes.number
		}),
		showAddContactModal: PropTypes.bool
	};

	componentWillMount() {
	}

	render() {
		const {home} = this.props;
		return (
			<div className="c-home">
				<div className="c-home-left">
					<ControlPanel userName="王凯" />
				</div>
				<div className="c-home-right">
					<ContactsPanel
						contacts={home.contacts}
						showAddContactModal={home.showAddContactModal}
						showHistoryIndex={home.showHistoryIndex}/>
				</div>
			</div>
		);
	}
}
