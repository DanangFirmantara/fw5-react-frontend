import http from '../../helpers/http'
import { VEHICLE_CLEARERROR, VEHICLE_CLEARLOADING, VEHICLE_GETDATA, VEHICLE_GETDATACATEGORY, VEHICLE_GETPOPULAR, VEHICLE_PIBIKE, VEHICLE_PICAR, VEHICLE_PIMOTORBIKE, VEHICLE_RESETDATA, VEHICLE_SETERROR, VEHICLE_SETLOADING } from '../reducers/vehicle'



export const getVehiclePopular = () =>{
	return async (dispatch)=>{
		try{
			dispatch({ type: VEHICLE_SETLOADING })
			dispatch({ type: VEHICLE_CLEARERROR })
			const { data } = await http().get('/popular')
			dispatch({
				type : VEHICLE_GETPOPULAR,
				payload : data.results
			})
			dispatch({ type: VEHICLE_CLEARLOADING })
		} catch (err){
			let payload = ''
			if(err.response){
				payload = err.response.data.message
			} else{
				payload = err.message
			}
			dispatch({
				type: VEHICLE_SETERROR,
				payload: payload
			})
			dispatch({
				type: VEHICLE_CLEARLOADING
			})
		}
	}
}

export const getVehicle = () =>{
	return async (dispatch) =>{
		try{
			dispatch({ type: VEHICLE_SETLOADING })
			dispatch({ type: VEHICLE_CLEARERROR })
			const { data } = await http().get('/vehicles')
			dispatch({
				type : VEHICLE_GETDATA,
				payload : data.results
			})
			dispatch({ type: VEHICLE_CLEARLOADING })
		} catch(err){
			let payload = ''
			if(err.response){
				payload = err.response.data.message
			} else{
				payload = err.message
			}
			dispatch({
				type: VEHICLE_SETERROR,
				payload: payload
			})
			dispatch({
				type: VEHICLE_CLEARLOADING
			})
		}
	}
}

export const getVehicleCategory = (idCategory) =>{
	return async (dispatch) =>{
		try{
			dispatch({ type: VEHICLE_SETLOADING })
			dispatch({ type: VEHICLE_CLEARERROR })
			const { data } = await http().get(`/list?filterBy=${idCategory}`)
			dispatch({
				type : VEHICLE_GETDATACATEGORY,
				payload : data.results
			})
			if(idCategory === 1){
				dispatch({
					type: VEHICLE_PICAR,
					payload : data.pageInfo
				})
			} else if (idCategory === 2){
				dispatch({
					type : VEHICLE_PIMOTORBIKE,
					payload : data.pageInfo
				})
			} else {
				dispatch({
					type : VEHICLE_PIBIKE,
					payload : data.pageInfo
				})
			}
			dispatch({ type: VEHICLE_CLEARLOADING })
		} catch(err){
			let payload = ''
			if(err.response){
				payload = err.response.data.message
			} else{
				payload = err.message
			}
			dispatch({
				type: VEHICLE_SETERROR,
				payload: payload
			})
			dispatch({
				type: VEHICLE_CLEARLOADING
			})
		}
	}
} 

export const doResetVehicle = () =>{
	return dispatch =>{
		dispatch({ type: VEHICLE_RESETDATA })
	}
}

export const searchVehicle = (name, location, sortType)=>{
	return{
		type: 'GET_VEHICLE',
		payload: http().get(`/vehicles?page=1&name=${name}&location=${location}&sortType=${sortType}`)
	}
}

export const getFilterVehicle = (data) =>{
	return{
		type : 'GET_VEHICLE',
		payload : http().get(`/list?filterBy=${data}`)
	}
}

export const getVehicleById = (id)=>{
	return {
		type : 'GET_VEHICLE',
		payload : http().get(`/vehicles?id=${id}`)
	}
}
