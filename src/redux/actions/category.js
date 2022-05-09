import http from '../../helpers/http'
import { CATEGORY_CLEARERROR, CATEGORY_CLEARLOADING, CATEGORY_GETDATA, CATEGORY_SETERROR, CATEGORY_SETLOADING } from '../reducers/category'

export const getCategory = () =>{
	return async (dispatch) =>{
		try{
			dispatch({ type: CATEGORY_SETLOADING })
			dispatch({ type: CATEGORY_CLEARERROR })
			const { data } = await http().get('/category')
			dispatch ({
				type: CATEGORY_GETDATA,
				payload : data.results
			})
			dispatch({ type: CATEGORY_CLEARLOADING })
		} catch(err){
			let payload = ''
			if(err.response){
				payload = err.response.data.message
			} else {
				payload = err.response
			}
			dispatch({
				type : CATEGORY_SETERROR,
				payload : payload
			})
			dispatch({ type : CATEGORY_CLEARLOADING })
		}
	}
} 
