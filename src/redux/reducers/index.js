import { combineReducers } from 'redux'

const initialState = {
	token : null
}
const counterState = {
	num : 0
}
const dataState = {
	results: [],
	pageInfo: {},
	isLoading:false,
	isError:false
}

const rootReducer = combineReducers({
	auth: (state=initialState, action) =>{
		switch(action.type){
		case 'LOGIN' :{
			const {email, password} = action.payload
			if(email==='admin@mail.com' && password==='admin'){
				state.token = 'abc'
				return state
			} else{
				alert('Wrong username')
				state.token = null
				return state
			}
		}
		case 'LOGOUT' :{
			state.token=null
			return state 
		}
		default : {
			return {...state}
		}}
	}, counter : (state = counterState, action) => {
		switch(action.type){
		case 'INCREAMENT' :{
			state.num++
			return state
		}
		case 'DECREAMENT':{
			state.num--
			return state
		}
		default :{
			return {...state}
		}}
	}, vehicle: (state=dataState , action)=>{
		switch(action.type){
		case 'GET_VEHICLE_PENDING': {
			state.isLoading = true
			return state
		}
		case 'GET_VEHICLE_FULFILLED' : {
			const {data} = action.payload
			state.results = data.results
			state.pageInfo = data.pageInfo
			state.isLoading = false
			return state
		}
		case 'GET_VEHICLE_REJECTED': {
			state.isLoading = false
			state.isError = true
			return state
		}
		default :{
			return state
		}
		}
	}
})

export default rootReducer