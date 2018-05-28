
const INITIAL_STATE = {

};


export default(state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'home':
			return action.payload;
		default:
			return state;
	}
};