const initialState = {
	data:[],
	isloading: false,
	isError : false,
	errorMsg : '',
	successMsg : '',
	pageInfo :{}
}

export const HISTORY_GETDATA = 'HISTORY_GETDATA'
export const HISTORY_SETLOADING = 'HISTORY_SETLOADING'
export const HISTORY_CLEARLOADING = 'HISTORY_CLEARLOADING'
export const HISTORY_SETERROR = 'HISTORY_SETERROR'
export const HISTORY_CLEARERROR = 'HISTORY_CLEARERROR'
export const HISTORY_RESETDATA = 'HISTORY_RESETDATA'
export const HISTORY_SETSUCCESS = 'HISTORY_SETSUCCESS'
export const HISTORY_CLEARSUCCESS = 'HISTORY_CLEARSUCCESS'
export const HISTORY_GETPAGEINFO = 'HISTORY_GETPAGEINFO'

const history = (state = initialState, action)=>{
	switch(action.type){
	case HISTORY_GETDATA:{
		return { ...state, data : action.payload }
	}
	case HISTORY_RESETDATA:{
		return { ...initialState }
	}
	case HISTORY_SETLOADING:{
		return { ...state, isLoading : true }
	}
	case HISTORY_CLEARLOADING:{
		return { ...state, isLoading : false }
	}
	case HISTORY_SETERROR:{
		return { ...state, errorMsg : action.payload }
	}
	case HISTORY_CLEARERROR:{
		return { ...state, errorMsg : '' }
	}
	case HISTORY_SETSUCCESS:{
		return { ...state, successMsg : action.payload }
	}
	case HISTORY_CLEARSUCCESS:{
		return { ...state, successMsg: '' }
	}
	case HISTORY_GETPAGEINFO:{
		return { ...state, pageInfo: action.payload }
	}
	default :{
		return { ...state }
	}
	}
}

export default history
