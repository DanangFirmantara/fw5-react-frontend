import { combineReducers } from 'redux'
import auth from './auth'
import counter from './counter'
import vehicle from './vehicle'

const rootReducer = combineReducers({
	auth,
	counter,
	vehicle
	
})

export default rootReducer