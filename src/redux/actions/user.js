import http from '../../helpers/http'
import { USER_CLEARERROR, USER_CLEARLOADING, USER_CLEARSUCCESS, USER_SETERROR, USER_SETLOADING, USER_SETSUCCESS } from '../reducers/user'

export const userSignUp = (username,email, password)=>{
	const param = new URLSearchParams()
	param.append('username',username)
	param.append('email',email)
	param.append('password',password)
	return({
		type: 'USER_SIGNUP',
		payload : http().post('/users',param)
	})
}

export const doSignUp = (dataUser) =>{
	return async dispatch =>{
		try{
			dispatch({ type: USER_SETLOADING })
			dispatch({ type: USER_CLEARERROR })
			dispatch({ type: USER_CLEARSUCCESS })
			const param = new URLSearchParams()
			Object.keys(dataUser).forEach(item =>{
				param.append(`${item}`, dataUser[item])
			})
			const { data } = await http().post('/users', param) 
			console.log(data.message)
			dispatch({
				type: USER_SETSUCCESS,
				payload: data.message
			})
			dispatch({ type: USER_CLEARLOADING })
		} catch(err){
			let payload = ''
			if(err.response){
				payload = err.response.data.message
			} else{
				payload = err.message
			}
			dispatch({
				type: USER_SETERROR,
				payload: payload
			})
			dispatch({
				type: USER_CLEARLOADING
			})
		}
	}
}
