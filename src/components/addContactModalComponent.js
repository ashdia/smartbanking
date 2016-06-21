import React, { PropTypes } from 'react';
import classNames from 'classnames';
import {Modal} from 'react-overlays';
import {Icon, Button, TextInput, Dropdown} from './';
import {homeActions} from '../actions';
import closeIcon from '../styles/icons/close_modal.svg';
import '../styles/components/modal';
import '../styles/components/addContactModal';

export default class AddContactModal extends React.Component {
	static propTypes = {
		className: PropTypes.string,
		show: PropTypes.bool
	};

	constructor(props, context) {
		super(props, context);
		this.state = this.getEmptyContact();
	}

	static defaultProps = {
		className: '',
		show: false
	};

	getEmptyContact() {
		return {
			name: '',
			phone: '',
			email: '',
			address: '',
			notes: '',
			history: [],
			rank: '普通客户'
		};
	}

	onSubmit(e) {
		e.preventDefault();
		this.onAdd();
	}

	onAdd() {
		homeActions.showAddContactModal(false);
		homeActions.addContact({
			name: this.state.name,
			phone: this.state.phone,
			email: this.state.email,
			address: this.state.address,
			notes: this.state.notes,
			history: [],
			rank: this.state.rank
		});

		this.setState(this.getEmptyContact());
	}

	hideModal() {
		this.setState(this.getEmptyContact());
		homeActions.showAddContactModal(false);
	}

	getRanks() {
		return [
			{ value: '普通客户', label: '普通客户' },
			{ value: '白金客户', label: '白金客户' }
		];
	}

	render() {
		const {	className, show } = this.props;

		return (
			<Modal
				className={classNames(className, 'c-add-contact-modal', 'c-dialog')}
				show={show}
				backdrop="static"
				onHide={() => this.hideModal()}>
				<div className="c-modal">
					<div className="c-modal-header">
						<span className="c-modal-header-title c-small-header">添加客户</span>
						<div tabIndex={0} className="c-modal-header-close" onClick={() => this.hideModal()}>
							<Icon glyph={closeIcon} />
						</div>
					</div>
					<div className="c-modal-body">
						<form onSubmit={this.onSubmit.bind(this)}>
							<div className="c-add-contact-label-group">
								<div className="c-add-contact-label">姓名</div>
								<div className="c-add-contact-label">电话</div>
							</div>
							<div className="c-add-contact-input-group">
								<div className="c-add-contact-input">
									<TextInput value={this.state.name} onChange={(value) => this.setState({name: value})}/>
								</div>
								<div className="c-add-contact-input">
									<TextInput value={this.state.phone} onChange={(value) => this.setState({phone: value})}/>
								</div>
							</div>
							<div className="c-add-contact-label-group">
								<span className="c-add-contact-label">电邮</span>
								<span className="c-add-contact-label">地址</span>
							</div>
							<div className="c-add-contact-input-group">
								<div className="c-add-contact-input">
									<TextInput value={this.state.email} onChange={(value) => this.setState({email: value})}/>
								</div>
								<div className="c-add-contact-input">
									<TextInput value={this.state.address} onChange={(value) => this.setState({address: value})}/>
								</div>
							</div>
							<div className="c-add-contact-label-group">
								<div className="c-add-contact-label">备注</div>
								<div className="c-add-contact-label">级别</div>
							</div>
							<div className="c-add-contact-input-group">
								<div className="c-add-contact-input">
									<TextInput value={this.state.notes} onChange={(value) => this.setState({notes: value})}/>
								</div>
								<div className="c-add-contact-input">
									<Dropdown value={this.state.rank} options={this.getRanks()} onChange={(value) => this.setState({rank: value.value})}/>
								</div>
							</div>
						</form>
					</div>
					<div className="c-modal-footer">
						<Button type="primary" onClick={() => this.onAdd()} size="small">提交</Button>
						<Button type="primary" onClick={() => this.hideModal()} size="small">取消</Button>
					</div>
				</div>
			</Modal>
		);
	}
}
