export function addRoute(csat) {
	console.log("AC Received", csat);
	return dispatch => {
		dispatch({ type: "ADD_ROUTE", payload: csat });
	};
}

export function next(history) {
	return (dispatch, getState) => {
		let { data, counter } = getState();
		let c = (counter + 1) % data.length;
		console.log("COUNTER", data.length);
		history.push(data[c].route);
		dispatch({ type: "NEXT", payload: c });
	};
}
