import http from '../../helpers/http'


export const getHistoryUser = (userId)=>{
	return({
		type : 'HISTORY_USERDATA',
		payload : http().get(`/history/user?userId=${userId}`)
	})
}