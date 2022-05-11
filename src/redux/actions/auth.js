import http from '../../helpers/http'
import { AUTH_CLEARERROR,
	AUTH_CLEARLOADING,
	AUTH_CLEARSUCCESS,
	AUTH_SETERROR,
	AUTH_SETLOADING,
	AUTH_GETTOKEN,
	AUTH_LOGOUT,
	AUTH_SETSUCCESS
} from '../reducers/auth'
import { CATEGORY_RESETDATA } from '../reducers/category'
import { HISTORY_RESETDATA } from '../reducers/history'
import { LOCATION_RESETDATA } from '../reducers/location'
import { PAYMENT_RESETDATA } from '../reducers/payment'
import { RESERVATION_RESETDATA } from '../reducers/reservation'
import { USER_RESETDATA } from '../reducers/user'
import { VEHICLE_RESETDATA } from '../reducers/vehicle'

export const doLogin = (username, password) =>{
	return async (dispatch)=>{
		try{
			dispatch({ type: AUTH_SETLOADING })
			dispatch({ type: AUTH_CLEARERROR })
			dispatch({ type: AUTH_CLEARSUCCESS })

			const param = new URLSearchParams()
			param.append('username', username)
			param.append('password', password)
			const { data } = await http().post('/auth/login', param)
			console.log(data.results[0])
			dispatch({
				type: AUTH_GETTOKEN,
				payload : data.results[0]
			})
			dispatch({ type: AUTH_CLEARLOADING })
		} catch(err){
			let payload = ''
			if(err.response){
				payload = err.response.data.message
			} else{
				payload = err.message
			}
			dispatch({
				type: AUTH_SETERROR,
				payload: payload
			})
			dispatch({
				type: AUTH_CLEARLOADING
			})
		}
	}
}

export const doLogout = () =>{
	return dispatch =>{
		dispatch({ type: VEHICLE_RESETDATA})
		dispatch({ type : RESERVATION_RESETDATA})
		dispatch({ type : CATEGORY_RESETDATA})
		dispatch({ type : HISTORY_RESETDATA})
		dispatch({ type : LOCATION_RESETDATA})
		dispatch({ type : PAYMENT_RESETDATA})
		dispatch({ type: USER_RESETDATA})
		dispatch({ type: AUTH_LOGOUT })
	}
}

export const doForgotRequest = (email) =>{
	return async (dispatch) => {
		try{
			dispatch({ type: AUTH_SETLOADING })
			dispatch({ type: AUTH_CLEARERROR })
			dispatch({ type: AUTH_CLEARSUCCESS })
			const param = new URLSearchParams()
			param.append('email', email)
			const { data } = await http().post('/auth/forgotRequest', param)
			dispatch({
				type: AUTH_SETSUCCESS,
				payload : data.message
			})
			dispatch({ type: AUTH_CLEARLOADING })
		} catch(err){
			let payload = ''
			if(err.response){
				payload = err.response.data.message
			} else{
				payload = err.message
			}
			dispatch({
				type: AUTH_SETERROR,
				payload: payload
			})
			dispatch({
				type: AUTH_CLEARLOADING
			})
		}
	}
}

export const getDataUser = (token)=>{
	return({
		type: 'AUTH_USERDATA',
		payload : http(token).get('/profiles')
	})
}

export const userEdit = (data,id)=>{
	const param = new URLSearchParams(data)
	return({
		type: 'AUTH_USEREDIT',
		payload: http().patch(`/users/?id=${id}`,param)
	})	
}
