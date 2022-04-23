const initialState={
	data: {},
	isLoading:false,
	isError:false,
	successMsg : '',
	errorMsg:''
}

export const USER_GETDATA = 'USER_GETDATA'
export const USER_SETLOADING = 'USER_SETLOADING'
export const USER_CLEARLOADING = 'USER_CLEARLOADING'
export const USER_SETERROR = 'USER_SETERROR'
export const USER_CLEARERROR = 'USER_CLEARERROR'
export const USER_RESETDATA = 'USER_RESETDATA'
export const USER_SETSUCCESS = 'USER_SETSUCCESS'
export const USER_CLEARSUCCESS = 'USER_CLEARSUCCESS'

const user = (state=initialState, action)=>{
	switch(action.type){
	case USER_GETDATA:{
		return { ...state, data: action.payload}
	}
	case USER_SETLOADING:{
		return { ...state, isLoading : true}
	}
	case USER_CLEARLOADING:{
		return { ...state, isLoading: false }
	}
	case USER_SETERROR:{
		return { ...state, errorMsg: action.payload }
	}
	case USER_CLEARERROR:{
		return { ...state, errorMsg: '' }
	}
	case USER_SETSUCCESS:{
		return { ...state, successMsg: action.payload }
	}
	case USER_CLEARSUCCESS:{
		return { ...state, successMsg: '' }
	}
	case USER_RESETDATA:{
		return { ...initialState }
	}
	case 'USER_SIGNUP_PENDING':{
		state.isLoading = true
		state.isError = false
		state.errorMsg = ''
		state.successMsg = ''
		return {...state}
	}
	case 'USER_SIGNUP_FULFILLED':{
		const {data} = action.payload 
		state.isLoading = false
		state.isError = false
		state.successMsg = data.message
		console.log(data.results)
		return {...state}
	}
	case 'USER_SIGNUP_REJECTED':{
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

export default user
