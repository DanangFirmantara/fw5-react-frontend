import http from '../../helpers/http'
import { AUTH_CLEARERROR,
	AUTH_CLEARLOADING,
	AUTH_CLEARSUCCESS,
	AUTH_SETERROR,
	AUTH_SETLOADING,
	AUTH_GETTOKEN,
	AUTH_LOGOUT
} from '../reducers/auth'

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
		dispatch({ type: AUTH_LOGOUT })
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

export const forgotRequest = (email)=>{
	const param = new URLSearchParams()
	param.append('email', email)
	return ({
		type: 'AUTH_FORGOTREQUEST',
		payload : http().post('/auth/forgotRequest', param)
	})
}
