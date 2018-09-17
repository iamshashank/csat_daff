export default (state = -1, action) => {
	console.log("next", action);

	let reminders = null;
	switch (action.type) {
		case "NEXT":
			return action.payload;
		default:
			return state;
	}
};
