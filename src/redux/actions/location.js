import http from '../../helpers/http'
import { LOCATION_CLEARERROR, LOCATION_CLEARLOADING, LOCATION_GETDATA, LOCATION_SETERROR, LOCATION_SETLOADING } from '../reducers/location'

export const getLocation = () =>{
	return async (dispatch) =>{
		try{
			dispatch({ type: LOCATION_SETLOADING })
			dispatch({ type: LOCATION_CLEARERROR })
			const { data } = await http().get('/location')
			dispatch ({
				type: LOCATION_GETDATA,
				payload : data.results
			})
			dispatch({ type: LOCATION_CLEARLOADING })
		} catch(err){
			let payload = ''
			if(err.response){
				payload = err.response.data.message
			} else {
				payload = err.response
			}
			dispatch({
				type : LOCATION_SETERROR,
				payload : payload
			})
			dispatch({ type : LOCATION_CLEARLOADING })
		}
	}
}
