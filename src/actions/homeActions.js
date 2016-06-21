import * as ActionTypes from '../actionTypes/homeActionTypes';

export function showAddContactModal(show) {
	return {
		type: ActionTypes.SHOW_ADD_CONTACT,
		payload: show
	};
}

export function addContact(contact) {
	return {
		type: ActionTypes.ADD_CONTACT,
		payload: contact
	};
}

export function showHistoryModal(index) {
	return {
		type: ActionTypes.TOGGLE_HISTORY_MODAL,
		payload: index
	};
}
