import http from '../../helpers/http'
import { AUTH_CLEARERROR, AUTH_CLEARLOADING, AUTH_CLEARSUCCESS, AUTH_SETERROR, AUTH_SETLOADING } from '../reducers/auth'
// import qs from 'query-string'

export const doLogin = (email, password) =>{
	return async (dispatch)=>{
		try{
			dispatch({ type: AUTH_SETLOADING })
			dispatch({ type: AUTH_CLEARERROR })
			dispatch({ type: AUTH_CLEARSUCCESS })
			const param = new URLSearchParams()
			param.append('password', password)
			param.append('email', email)
			console.log( email, password)
			console.log(param)
			const { data } = await http().post('/auth/login', param)
			console.log(data)
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

export const login = (email, password) =>{
	const param = new URLSearchParams() //query string-like body
	param.append('username', email) // karena backend membutuhkan data username ; * ketika input username atau email data tetap berhasil ditangkap
	param.append('password', password)
	return({
		type: 'AUTH_LOGIN',
		payload : http().post('/auth/login', param)
	})
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

export const forgotRequest = (email)=>{
	const param = new URLSearchParams()
	param.append('email', email)
	return ({
		type: 'AUTH_FORGOTREQUEST',
		payload : http().post('/auth/forgotRequest', param)
	})
}