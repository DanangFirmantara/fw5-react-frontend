import { combineReducers } from 'redux'
import auth from './auth'
import counter from './counter'
import vehicle from './vehicle'
import user from './user'
import reservation from './reservation'

const rootReducer = combineReducers({
	auth,
	counter,
	vehicle,
	user,
	reservation
})

export default rootReducer