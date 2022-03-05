import { combineReducers } from 'redux'
import auth from './auth'
import counter from './counter'
import vehicle from './vehicle'
import user from './user'

const rootReducer = combineReducers({
	auth,
	counter,
	vehicle,
	user
	
})

export default rootReducer