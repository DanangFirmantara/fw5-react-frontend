import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'
import auth from './auth'
import counter from './counter'
import vehicle from './vehicle'
import user from './user'
import reservation from './reservation'
import history from './history'
import resetPassword from './resetPassword'
import {persistReducer} from 'redux-persist'
import location from './location'
import category from './category'
import payment from './payment'

const persistAuth = {
	key : 'auth',
	storage
}

const persistCounter = {
	key : 'counter',
	storage
}

const persistVehicle = {
	key : 'vehicle',
	storage
}

const persistReservation = {
	key : 'reservation',
	storage
}

const persistHistory = {
	key : 'history',
	storage
}

const persistResetPassword = {
	key : 'resetPassword',
	storage
}

const persistUser = {
	key : 'user',
	storage
}

const persistLocation = {
	key : 'location',
	storage
}

const persistCategory = {
	key : 'category',
	storage 
}

const persistPayment = {
	key : 'payment',
	storage
}

const rootReducer = combineReducers({
	auth : persistReducer(persistAuth, auth),
	vehicle : persistReducer(persistVehicle, vehicle),
	counter : persistReducer(persistCounter, counter),
	user : persistReducer(persistUser, user),
	resetPassword : persistReducer(persistResetPassword, resetPassword),
	reservation : persistReducer(persistReservation, reservation),
	history : persistReducer(persistHistory, history),
	location : persistReducer(persistLocation, location),
	category : persistReducer(persistCategory, category),
	payment : persistReducer(persistPayment, payment)
})

export default rootReducer
