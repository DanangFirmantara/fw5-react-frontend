import http from '../../helpers/http'
import { PAYMENT_CLEARERROR, PAYMENT_CLEARLOADING, PAYMENT_CLEARSUCCESS, PAYMENT_GETDATA, PAYMENT_SETERROR, PAYMENT_SETLOADING, PAYMENT_SETSUCCESS } from '../reducers/payment'


export const createPayment = (dataPayment, token) =>{
	return async (dispatch)=>{
		try{
			dispatch({ type: PAYMENT_SETLOADING })
			dispatch({ type: PAYMENT_CLEARERROR })
			const param = new URLSearchParams(dataPayment)
			const { data } = await http(token).post('/history', param )
			dispatch({
				type: PAYMENT_GETDATA,
				payload : data.results
			})
			dispatch({ type: PAYMENT_CLEARLOADING })
		} catch(err){
			let payload = ''
			if(err.response){
				payload = err.response.data.message
			} else{
				payload = err.message
			}
			dispatch({
				type : PAYMENT_SETERROR,
				payload : payload
			})
			dispatch({ type: PAYMENT_CLEARLOADING })
		}
	}
}

export const doPayment = (dataPayment, token)=>{
	return async (dispatch) =>{
		try{
			dispatch({ type: PAYMENT_SETLOADING })
			dispatch({ type: PAYMENT_CLEARERROR })
			const param = new URLSearchParams(dataPayment)
			const { data } = await http(token).patch('/history/payment', param )
			dispatch({
				type: PAYMENT_GETDATA,
				payload : data.results
			})
			dispatch({
				type: PAYMENT_SETSUCCESS,
				payload : data.message
			})
			dispatch({ type: PAYMENT_CLEARLOADING })
		} catch(err){
			let payload = ''
			if(err.response){
				payload = err.response.data.message
			} else{
				payload = err.message
			}
			dispatch({
				type : PAYMENT_SETERROR,
				payload : payload
			})
			dispatch({ type: PAYMENT_CLEARLOADING })
		}
	} 
}

export const getHistoryDetail = (id, token) =>{
	return async (dispatch) =>{
		try{
			dispatch({ type: PAYMENT_SETLOADING })
			dispatch({ type: PAYMENT_CLEARERROR })
			dispatch({ type: PAYMENT_CLEARSUCCESS })
			const { data } = await http(token).get(`/history/${id}`)
			dispatch({
				type : PAYMENT_GETDATA,
				payload : data.results
			})
			dispatch({ type: PAYMENT_CLEARLOADING })
		} catch(err){
			let payload = ''
			if(err.response){
				payload = err.response.data.message
			} else{
				payload = err.message
			}
			dispatch({
				type : PAYMENT_SETERROR,
				payload : payload
			})
			dispatch({ type: PAYMENT_CLEARLOADING })
		}
	}
}
