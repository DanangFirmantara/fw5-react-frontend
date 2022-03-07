import { combineReducers } from 'redux'
import auth from './auth'
import counter from './counter'
import vehicle from './vehicle'
import user from './user'
import reservation from './reservation'
import history from './history'
import resetPassword from './resetPassword'

const rootReducer = combineReducers({
	auth,
	counter,
	vehicle,
	user,
	reservation,
	history,
	resetPassword
})

export default rootReducer