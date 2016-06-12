const initialState = {
	clients: [],
	metrics: []
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
