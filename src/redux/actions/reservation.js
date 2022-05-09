import http from '../../helpers/http'
import { RESERVATION_DECQUANTITY, RESERVATION_INCQUANTITY, RESERVATION_RESETDATA, RESERVATION_SETENDDATE, RESERVATION_SETSTARTDATE, RESERVATION_SETERROR, RESERVATION_CLEARLOADING, RESERVATION_SETLOADING, RESERVATION_CLEARERROR, RESERVATION_GETDATA } from '../reducers/reservation'

import { PAYMENT_GETDATA } from '../reducers/payment'

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

export const doReservation = (dataReservation, token) =>{
	return async(dispatch) =>{
		try{
			dispatch({ type: RESERVATION_SETLOADING })
			dispatch({ type: RESERVATION_CLEARERROR })
			const param = new URLSearchParams(dataReservation)
			const { data } = await http(token).post('/reservation', param)
			dispatch({
				type : RESERVATION_GETDATA,
				payload : data.results
			})
			dispatch({ type: RESERVATION_CLEARLOADING })
		} catch(err){
			let payload = ''
			if(err.response){
				payload = err.response.data.message
			} else{
				payload = err.message
			}
			dispatch({
				type : RESERVATION_SETERROR,
				payload : payload,
			})
			dispatch({ type: RESERVATION_CLEARLOADING })
		}
	}
}

export const doReservationPayment = (dataReservation, dataPayment, token)=>{
	return async(dispatch)=>{
		try{
			dispatch({ type: RESERVATION_SETLOADING })
			dispatch({ type: RESERVATION_CLEARERROR })
			const reservation = new URLSearchParams(dataReservation)
			const payment = new URLSearchParams(dataPayment)
			console.log(reservation)
			const { data:dataRes } = await http(token).post('/reservation', reservation)
			payment.append('idReservation', dataRes.results.id)
			console.log(dataRes.results)
			console.log(payment)
			const { data:dataPay } = await http(token).post('/history', payment )
			dispatch({
				type : RESERVATION_GETDATA,
				payload : dataRes.results
			})
			dispatch({
				type : PAYMENT_GETDATA,
				payload : dataPay.results
			})
			dispatch({ type: RESERVATION_CLEARLOADING })
		}catch(err){
			let payload = ''
			if(err.response){
				payload = err.response.data.message
			} else{
				payload = err.message
			}
			dispatch({
				type : RESERVATION_SETERROR,
				payload : payload,
			})
			dispatch({ type: RESERVATION_CLEARLOADING })
		}
	}
}
