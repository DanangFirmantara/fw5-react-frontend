import http from '../../helpers/http'

export const resetPassword = (data)=>{
	const param = new URLSearchParams(data)
	return({
		type : 'POST_RESETPASSWORD',
		payload : http().post('/auth/forgotRequest',param)
	})
}