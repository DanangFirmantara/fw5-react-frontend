import http from '../../helpers/http'

export const getVehiclePopular = () =>{
	return{
		type: 'GET_VEHICLE',
		payload: http().get('/popular')
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