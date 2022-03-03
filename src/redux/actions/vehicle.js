import {default as axios} from 'axios'

export const getVehiclePopular = () =>{
	return{
		type: 'GET_VEHICLE',
		payload: axios.get('http://localhost:5000/popular')
	}
}

export const searchVehicle = (name, location, sortType)=>{
	return{
		type: 'GET_VEHICLE',
		payload: axios.get(`http://localhost:5000/vehicles?page=1&name=${name}&location=${location}&sortType=${sortType}`)
	}
}

export const getFilterVehicle = (data) =>{
	return{
		type : 'GET_VEHICLE',
		payload : axios.get(`http://localhost:5000/list?filterBy=${data}`)
	}
}