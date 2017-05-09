import { combineReducers } from "redux"

import tweets from "./tweetsReducer"
import username from "./usernameReducer"

export default combineReducers({
	username,
})
