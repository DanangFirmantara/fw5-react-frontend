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

const rootReducer = combineReducers({
   auth : persistReducer(persistAuth, auth),
   vehicle : persistReducer(persistVehicle, vehicle),
   counter : persistReducer(persistCounter, counter),
   user : persistReducer(persistUser, user),
   resetPassword : persistReducer(persistResetPassword, resetPassword),
   reservation : persistReducer(persistReservation, reservation),
   history : persistReducer(persistHistory, history)
})

export default rootReducer
