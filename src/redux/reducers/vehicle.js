const initialState = {
	dataPopular : [],
	data:[],
	dataCategory : [],
	pageInfo: {},
	isLoading: false,
	isError: false,
	errorMsg : '',
	pICar : {},
	pIMotorBike : {},
	pIBike : {},
}

export const VEHICLE_GETDATA = 'VEHICLE_GETDATA'
export const VEHICLE_GETDATACATEGORY = 'VEHICLE_GETDATACATEGORY'
export const VEHICLE_PICAR = 'VEHICLE_PICAR'
export const VEHICLE_PIMOTORBIKE = 'VEHICLE_PIMOTORBIKE'
export const VEHICLE_PIBIKE = 'VEHICLE_PIBIKE'
export const VEHICLE_SETLOADING = 'VEHICLE_SETLOADING'
export const VEHICLE_CLEARLOADING = 'VEHICLE_CLEARLOADING'
export const VEHICLE_SETERROR = 'VEHICLE_SETERROR'
export const VEHICLE_CLEARERROR = 'VEHICLE_CLEARERROR'
export const VEHICLE_RESETDATA = 'VEHICLE_RESETDATA'
export const VEHICLE_GETPOPULAR = 'VEHICLE_GETPOPULAR'

const vehicle = (state = initialState, action)=>{
	switch(action.type){
	case VEHICLE_GETDATA :{
		return { ...state,data : action.payload}
	}
	case VEHICLE_GETPOPULAR:{
		return { ...state, dataPopular : action.payload }
	}
	case VEHICLE_GETDATACATEGORY:{
		return { ...state, dataCategory: [ ...state.dataCategory, ...action.payload ]}
	}
	case VEHICLE_PICAR:{
		return { ...state, pICar: action.payload }
	}
	case VEHICLE_PIMOTORBIKE:{
		return { ...state, pIMotorBike: action.payload }
	}
	case VEHICLE_PIBIKE:{
		return { ...state, pIBike: action.payload }
	}
	case VEHICLE_SETLOADING:{
		return { ...state, isLoading : true }
	}
	case VEHICLE_CLEARLOADING:{
		return { ...state, isLoading : false }
	}
	case VEHICLE_SETERROR:{
		return { ...state, errorMsg : action.payload }
	}
	case VEHICLE_CLEARERROR : {
		return { ...state, errorMsg : '' }
	}
	case VEHICLE_RESETDATA:{
		return { ...initialState }
	}
	default:{
		return { ...state } 
	}
	}
}

export default vehicle
