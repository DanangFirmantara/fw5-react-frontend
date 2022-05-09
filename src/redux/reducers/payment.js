const initialState = {
	data : {},
	isLoading : false,
	errorMsg : '',
	successMsg : ''
}

export const PAYMENT_GETDATA = 'PAYMENT_GETDATA'
export const PAYMENT_SETLOADING = 'PAYMENT_SETLOADING'
export const PAYMENT_CLEARLOADING = 'PAYMENT_CLEARLOADING'
export const PAYMENT_SETERROR = 'PAYMENT_SETERROR'
export const PAYMENT_CLEARERROR = 'PAYMENT_CLEARERROR'
export const PAYMENT_SETSUCCESS = 'PAYMENT_SETSUCCESS'
export const PAYMENT_CLEARSUCCESS = 'PAYMENT_CLEARSUCCESS'
export const PAYMENT_RESETDATA = 'PAYMENT_RESETDATA'
export const PAYMENT_CLEARMSG = 'PAYMENT_CLEARMSG'

const payment = ( state=initialState, action)=>{
	switch(action.type){
	case PAYMENT_GETDATA:{
		return { ...state, data : action.payload }
	}
	case PAYMENT_RESETDATA:{
		return { ...initialState }
	}
	case PAYMENT_SETLOADING:{
		return { ...state, isLoading : true}
	}
	case PAYMENT_CLEARLOADING:{
		return { ...state, isLoading : false }
	}
	case PAYMENT_SETERROR:{
		return { ...state, errorMsg : action.payload}
	}
	case PAYMENT_CLEARERROR:{
		return { ...state, errorMsg : ''}
	}
	case PAYMENT_SETSUCCESS:{
		return { ...state, successMsg : action.payload }
	}
	case PAYMENT_CLEARSUCCESS:{
		return { ...state, successMsg : '' }
	}
	case PAYMENT_CLEARMSG:{
		return { ...state, errorMsg: '', successMsg: ''}
	}
	default :{
		return { ...state }
	}
	}
}

export default payment
