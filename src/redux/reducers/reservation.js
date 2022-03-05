const initialState = {
	dataReservation : {}
}

const reservation = (state=initialState, action)=>{
	switch(action.type){
	case 'RESERVATION_ADD':{
		state.dataReservation = action.payload
		return {...state}
	}
	default:{
		return {...state}
	}
	}
}

export default reservation