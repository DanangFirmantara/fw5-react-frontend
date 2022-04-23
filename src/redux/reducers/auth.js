
const initialState = {
	token : null,
	userData : [],
	isLoading : false,
	isError : false,
	successMsg : '',
	successMsgUpdated: '',
	errorMsg : '',
	successMsgForgot: '',
	data : [],
}

export const AUTH_GETDATA = 'AUTH_GETDATA'
export const AUTH_SETLOADING = 'AUTH_SETLOADING'
export const AUTH_CLEARLOADING = 'AUTH_CLEARLOADING'
export const AUTH_SETERROR = 'AUTH_SETERROR'
export const AUTH_CLEARERROR = 'AUTH_CLEARERROR'
export const AUTH_GETTOKEN = 'AUTH_GETTOKEN'
export const AUTH_LOGOUT = 'AUTH_LOGOUT'
export const AUTH_SETSUCCESS = 'AUTH_SETSUCCESS'
export const AUTH_CLEARSUCCESS = 'AUTH_CLEARSUCCESS'


const auth = (state=initialState, action)=>{
	switch(action.type){
	case AUTH_GETDATA :{
		return { ...state, data : action.payload}
	}
	case AUTH_GETTOKEN: {
		return { ...state, token : action.payload}
	}
	case AUTH_SETLOADING:{
		return {...state, isLoading: true}
	}
	case AUTH_CLEARLOADING:{
		return { ...state, isLoading: false}
	}
	case AUTH_SETSUCCESS:{
		return { ...state, successMsg: action.payload}
	}
	case AUTH_CLEARSUCCESS:{
		return { ...state, successMsg: ''}
	}
	case AUTH_SETERROR:{
		return { ...state, errorMsg: action.payload}
	}
	case AUTH_CLEARERROR:{
		return {...state, errorMsg: ''}
	}
	case AUTH_LOGOUT:{
		return { ...initialState } 
	}
	case 'AUTH_LOGIN_PENDING':{
		state.isLoading = true
		state.isError = false
		state.successMsg = ''
		state.errorMsg = ''
		state.successMsgUpdated = ''
		return {...state}
	}
	case 'AUTH_LOGIN_FULFILLED':{
		const {results, message} = action.payload.data 
		state.isLoading = false
		state.isError = false
		state.token = results
		state.successMsg = message
		window.localStorage.setItem('token', state.token)
		return {...state}
	}
	case 'AUTH_LOGIN_REJECTED':{
		state.isLoading = false
		state.isError = true
		state.errorMsg = 'check your email, username, and password'
		return {...state}
	}
	
	case 'AUTH_USERDATA_PENDING':{
		state.isLoading = true
		state.isError = false
		state.errorMsg = ''
		state.successMsg = ''
		return {...state}
	}
	case 'AUTH_USERDATA_FULFILLED':{
		const {results, message} = action.payload.data
		state.isLoading = false
		state.isError = false
		state.successMsg = message
		state.userData = results
		return {...state}
	}
	case 'AUTH_USERDATA_REJECTED':{
		const {message} = action.payload.response.data
		console.log(message)
		state.isLoading = false
		state.isError = true
		state.errorMsg = message
		return {...state}
	}
	case 'AUTH_USEREDIT_PENDING':{
		state.isLoading = true
		state.isError = false
		state.errorMsg = ''
		state.successMsg = ''
		state.successMsgUpdated = ''
		return {...state}
	}
	case 'AUTH_USEREDIT_FULFILLED':{
		const {results, message} = action.payload.data
		state.isLoading = false
		state.isError = false
		state.successMsgUpdated = message
		state.userData = results
		return {...state}
	}
	case 'AUTH_USEREDIT_REJECTED':{
		const {message} = action.payload.response.data
		console.log(message)
		state.isLoading = false
		state.isError = true
		state.errorMsg = message
		return {...state}
	}
	case 'AUTH_FORGOTREQUEST_PENDING':{
		state.isLoading = true 
		state.isError = false
		state.errorMsg = ''
		state.successMsg = ''
		return {...state}
	}
	case 'AUTH_FORGOTREQUEST_FULFILLED':{
		const {message} = action.payload.data
		state.isLoading = false
		state.successMsgForgot = message
		return {...state}
	}
	case 'AUTH_FORGOTREQUEST_REJECTED':{
		const {message} = action.payload.response.data
		state.isLoading = false
		state.isError = true
		state.errorMsg = message
		return {...state}
	}
	default:{
		return {...state}
	}
	}
}

export default auth