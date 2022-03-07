const initialState = {
	dataReservation : [],
	isLoading : false,
	isError : false,
	errorMsg : '',
	successMsg : ''
}

const reservation = (state=initialState, action)=>{
	switch(action.type){
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