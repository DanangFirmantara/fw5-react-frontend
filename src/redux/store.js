/* eslint-disable import/no-anonymous-default-export */
import {createStore, applyMiddleware} from 'redux'
import {persistStore} from 'redux-persist'
import rootReducer from './reducers'
import logger from 'redux-logger'
import promise from 'redux-promise-middleware'
import thunk from 'redux-thunk'

export default () => {
	const store = createStore(rootReducer, applyMiddleware(promise, thunk, logger))
	const persistor = persistStore(store)
	return {store, persistor}
}
