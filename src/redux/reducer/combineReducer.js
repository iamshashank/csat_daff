import React from "react";
import dataReducer from "../reducer/dataReducer.js";
import next from "../reducer/next.js";

import { combineReducers } from "redux";

export default combineReducers({
	data: dataReducer,
	counter: next
});
