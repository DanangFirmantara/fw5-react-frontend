import http from '../../helpers/http'
import { RESERVATION_DECQUANTITY, RESERVATION_INCQUANTITY, RESERVATION_RESETDATA, RESERVATION_SETENDDATE, RESERVATION_SETSTARTDATE } from '../reducers/reservation'

export const incQuantity = () =>{
	return dispatch =>{
		dispatch({ type : RESERVATION_INCQUANTITY })
	}
}

export const decQuantity = () =>{
	return dispatch =>{
		dispatch({ type : RESERVATION_DECQUANTITY })
	}
}

export const startDate = () =>{
	return dispatch =>{
		dispatch({ type : RESERVATION_SETSTARTDATE })
	}
}

export const endDate = () =>{
	return dispatch =>{
		dispatch({ type : RESERVATION_SETENDDATE })
	}
}

export const clearReservation = () =>{
	return dispatch =>{
		dispatch({ type : RESERVATION_RESETDATA })
	}
}

export const reservation = (data)=>{
	return{
		type : 'RESERVATION_ADD',
		payload : data
	}
}

export const createReservation = (data)=>{
	const param = new URLSearchParams(data)

	return{
		type : 'RESERVATION_CREATE',
		payload : http().post('/history', param)
	}
}
