const initialState = {
	dataReservation : [],
	quantity : 0,
	startDate : '',
	endDate : '',
	data : {},
	isLoading : false,
	isError : false,
	errorMsg : '',
	successMsg : ''
}

export const RESERVATION_GETDATA = 'RESERVATION_GETDATA'
export const RESERVATION_RESETDATA = 'RESERVATION_RESETDATA'
export const RESERVATION_SETLOADING = 'RESERVATION_SETLOADING'
export const RESERVATION_CLEARLOADING = 'RESERVATION_CLEARLOADING'
export const RESERVATION_SETERROR = 'RESERVATION_SETERROR'
export const RESERVATION_CLEARERROR = 'RESERVATION_CLEARERROR'
export const RESERVATION_INCQUANTITY = 'RESERVATION_INCQUANTITY'
export const RESERVATION_DECQUANTITY = 'RESERVATION_DECQUANTITY'
export const RESERVATION_SETSUCCESS = 'RESERVATION_SETSUCCESS'
export const RESERVATION_CLEARSUCCESS = 'RESERVATION_CLEARSUCCESS'
export const RESERVATION_SETSTARTDATE = 'RESERVATION_SETSTARTDATE'
export const RESERVATION_SETENDDATE = 'RESERVATION_SETENDDATE'

const reservation = (state=initialState, action)=>{
	switch(action.type){
	case RESERVATION_GETDATA:{
		return { ...state, data : action.payload }
	}
	case RESERVATION_RESETDATA:{
		return { ...initialState }
	}
	case RESERVATION_SETLOADING:{
		return { ...state, isLoading : true }
	}
	case RESERVATION_CLEARLOADING:{
		return { ...state, isLoading : false }
	}
	case RESERVATION_SETERROR:{
		return { ...state, errorMsg: action.payload }
	}
	case RESERVATION_CLEARERROR:{
		return { ...state, errorMsg : '' }
	}
	case RESERVATION_SETSTARTDATE:{
		return { ...state, startDate : action.payload }
	}
	case RESERVATION_SETENDDATE:{
		return { ...state, endDate : action.payload }
	}
	case RESERVATION_INCQUANTITY:{
		return { ...state, quantity : state.quantity + 1 }
	}
	case RESERVATION_DECQUANTITY:{
		return { ...state, quantity : state.quantity - 1 }
	}
	case 'RESERVATION_ADD':{
		state.dataReservation = action.payload
		return {...state}
	}
	case 'RESERVATION_CREATE_PENDING':{
		state.isLoading = true
		state.isError = false
		state.errorMsg = ''
		state.successMsg = ''
		return {...state}
	}
	case 'RESERVATION_CREATE_FULFILLED':{
		const {message, results} = action.payload.data
		state.dataReservation = results
		state.successMsg = message
		state.isLoading = false
		state.isError = false
		return {...state}
	}
	case 'RESERVATION_CREATE_REJECTED':{
		const {message} = action.payload.response.data
		state.errorMsg = message
		state.isLoading = false
		state.isError = true
		return {...state}
	}
	default:{
		return {...state}
	}
	}
}

export default reservation
