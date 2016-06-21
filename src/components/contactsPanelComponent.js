import React, {PropTypes} from 'react';
import {SearchBox, Table, Button, AddContactModal, ShowHistoryModal} from './';
import '../styles/components/contactsPanel';
import addIcon from '../styles/icons/add-new_32.svg';
import {homeActions} from '../actions';

export default class ContactsPanel extends React.Component {
	static propTypes = {
		contacts: PropTypes.array,
		showAddContactModal: PropTypes.bool,
		showHistoryIndex: PropTypes.number
	};

	getColumns() {
		const columns = [
			{
				header: '序号',
				headerClassName: 'c-contacts-panel-table-header',
				content: (row, index) => { console.log(row); return index + 1; }
			},
			{
				header: '姓名',
				headerClassName: 'c-contacts-panel-table-header',
				content: row => row.name
			},
			{
				header: '电话',
				headerClassName: 'c-contacts-panel-table-header',
				content: row => row.phone
			},
			{
				header: '电邮',
				headerClassName: 'c-contacts-panel-table-header',
				content: row => row.email
			},
			{
				header: '地址',
				size: 'medium',
				headerClassName: 'c-contacts-panel-table-header',
				content: row => row.address
			},
			{
				header: '备注',
				size: 'medium',
				headerClassName: 'c-contacts-panel-table-header',
				content: row => row.notes
			},
			{
				header: '联系记录',
				headerClassName: 'c-contacts-panel-table-header',
				// content: row => row.history
				content: (row, index) => { console.log(row); return <Button size="small" onClick={() => homeActions.showHistoryModal(index)}>查看</Button>; }
			},
			{
				header: '级别',
				headerClassName: 'c-contacts-panel-table-header',
				content: row => row.rank
			}
		];

		return columns;
	}

	getHistory() {
		const {showHistoryIndex, contacts} = this.props;

		if (showHistoryIndex < 0 || contacts.length === 0) return [];

		return contacts[showHistoryIndex].history;
	}

	render() {
		const { contacts, showAddContactModal, showHistoryIndex } = this.props;
		return (
			<div className="contacts-panel">
				<div className="c-contacts-panel-header">
					<div className="c-contacts-panel-search-box">
						<SearchBox />
					</div>
				</div>
				<div className="c-contacts-panel-content">
					<div className="c-contacts-add-contact">
						<Button size="small" icon={{glyph: addIcon, size: 20}} onClick={() => homeActions.showAddContactModal(true)}>添加客户</Button>
					</div>

					<div className="c-contacts-panel-table">
						<Table columns={this.getColumns()} dataRows={contacts} />
					</div>
				</div>
				<AddContactModal show={showAddContactModal} />
				<ShowHistoryModal show={showHistoryIndex >= 0} history={this.getHistory()}/>
			</div>
		);
	}
}
