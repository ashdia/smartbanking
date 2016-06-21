import React, { PropTypes } from 'react';
import classNames from 'classnames';
import {Modal} from 'react-overlays';
import {Button, Icon} from './';
import {homeActions} from '../actions';
import closeIcon from '../styles/icons/close_modal.svg';
import '../styles/components/modal';
import '../styles/components/showHistoryModal';

export default class ShowHistoryModal extends React.Component {
	static propTypes = {
		className: PropTypes.string,
		show: PropTypes.bool,
		history: PropTypes.array
	};

	static defaultProps = {
		className: '',
		show: false
	};

	getHistory() {
		const { history } = this.props;

		return history.map((h, index) => {
			return (
				<div key={index} className="c-history-modal-piece">
					<div className="c-history-modal-time">{h.time}</div>
					<div className="c-history-modal-message">{h.message}</div>
				</div>
			);
		});
	}

	render() {
		const {	className, show } = this.props;

		return (
			<Modal
				className={classNames(className, 'c-add-contact-modal', 'c-dialog')}
				show={show}
				backdrop="static"
				onHide={() => homeActions.showHistoryModal(-1)}>
				<div className="c-modal">
					<div className="c-modal-header">
						<span className="c-modal-header-title c-small-header">联系记录</span>
						<div tabIndex={0} className="c-modal-header-close" onClick={() => homeActions.showHistoryModal(-1)}>
							<Icon glyph={closeIcon} />
						</div>
					</div>
					<div className="c-modal-body">
						{this.getHistory()}
					</div>
					<div className="c-modal-footer">
						<Button type="primary" onClick={() => homeActions.showHistoryModal(-1)} size="small">确定</Button>
					</div>
				</div>
			</Modal>
		);
	}
}
