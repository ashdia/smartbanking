import * as ActionTypes from '../actionTypes/homeActionTypes';
import { contactData } from '../data';

const initialState = {
	showAddContactModal: false,
	contacts: contactData,
	showHistoryIndex: -1 // controls show/hide history modal, show nothing if -1
};
const handlers = {};

// the reducer
export function home(state = initialState, action) {
	const { type } = action;
	if (!handlers[type]) {
		return state;
	}
	return handlers[type](state, action);
}

handlers[ActionTypes.SHOW_ADD_CONTACT] = (state, {payload}) => {
	return {
		...state,
		showAddContactModal: payload
	};
};

handlers[ActionTypes.ADD_CONTACT] = (state, {payload}) => {
	const contacts = [...state.contacts];
	contacts.push(payload);
	return {
		...state,
		contacts
	};
};

handlers[ActionTypes.TOGGLE_HISTORY_MODAL] = (state, {payload}) => {
	return {
		...state,
		showHistoryIndex: payload
	};
};
