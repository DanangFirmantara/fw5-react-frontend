const initialState = {
	data : [],
	isLoading : false,
	errorMsg : '',

}

export const LOCATION_GETDATA = 'LOCATION_GETDATA'
export const LOCATION_SETLOADING = 'LOCATION_SETLOADING'
export const LOCATION_CLEARLOADING = 'LOCATION_CLEARLOADING'
export const LOCATION_SETERROR = 'LOCATION_SETERROR'
export const LOCATION_CLEARERROR = 'LOCATION_CLEARERROR'
export const LOCATION_RESETDATA = 'LOCATION_RESETDATA'

const location = (state = initialState, action)=>{
	switch(action.type){
	case LOCATION_GETDATA:{
		return { ...state, data : action.payload }
	}
	case LOCATION_SETLOADING:{
		return { ...state, isLoading: true}
	}
	case LOCATION_CLEARLOADING:{
		return { ...state, isLoading: false }
	}
	case LOCATION_SETERROR:{
		return { ...state, errorMsg : action.payload }
	}
	case LOCATION_CLEARERROR:{
		return { ...state, errorMsg : '' }
	}
	case LOCATION_RESETDATA:{
		return { ...initialState }
	}
	default :{
		return { ...state }
	}
	}
}

export default location
