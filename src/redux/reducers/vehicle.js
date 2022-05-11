const initialState = {
	dataPopular : [],
	data:[],
	dataCategory : [],
	dataDetail : {},
	dataSearch : [],
	pISearch : {},
	pageInfo: {},
	isLoading: false,
	isError: false,
	errorMsg : '',
	pICar : {},
	pIMotorBike : {},
	pIBike : {},
	pIPopular : {},
	successMsg : '',
	dataViewMore: [],
	pIViewMore:{}
}

export const VEHICLE_GETDATA = 'VEHICLE_GETDATA'
export const VEHICLE_GETDATAVIEWMORE = 'VEHICLE_GETDATAVIEWMORE'
export const VEHICLE_GETDATACATEGORY = 'VEHICLE_GETDATACATEGORY'
export const VEHICLE_GETDATADETAIL = 'VEHICLE_GETDATADETAIL'
export const VEHICLE_GETDATASEARCH = 'VEHICLE_GETDATASEARCH'
export const VEHICLE_CLEARDATASEARCH = 'VEHICLE_CLEARDATASEARCH'
export const VEHICLE_PISEARCH = 'VEHICLE_PISEARCH'
export const VEHICLE_PICAR = 'VEHICLE_PICAR'
export const VEHICLE_PIVIEWMORE = 'VEHICLE_PIVIEWMORE'
export const VEHICLE_PIMOTORBIKE = 'VEHICLE_PIMOTORBIKE'
export const VEHICLE_PIBIKE = 'VEHICLE_PIBIKE'
export const VEHICLE_SETLOADING = 'VEHICLE_SETLOADING'
export const VEHICLE_CLEARLOADING = 'VEHICLE_CLEARLOADING'
export const VEHICLE_SETSUCCESS = 'VEHICLE_SETSUCCESS'
export const VEHICLE_CLEARSUCCESS = 'VEHICLE_CLEARSUCCESS'
export const VEHICLE_SETERROR = 'VEHICLE_SETERROR'
export const VEHICLE_CLEARERROR = 'VEHICLE_CLEARERROR'
export const VEHICLE_RESETDATA = 'VEHICLE_RESETDATA'
export const VEHICLE_RESETDATADETAIL = 'VEHICLE_RESETDATADETAIL'
export const VEHICLE_GETPOPULAR = 'VEHICLE_GETPOPULAR'
export const VEHICLE_PIPOPULAR = 'VEHICLE_PIPOPULAR'
export const VEHICLE_CLEARMSG = 'VEHICLE_CLEARMSG'
export const VEHICLE_UPDATEVEHICLE = 'VEHICLE_UPDATEVEHICLE'

const vehicle = (state = initialState, action)=>{
	switch(action.type){
	case VEHICLE_GETDATA :{
		return { ...state,data : action.payload}
	}
	case VEHICLE_GETDATADETAIL:{
		return { ...state, dataDetail: action.payload }
	}
	case VEHICLE_GETPOPULAR:{
		return { ...state, dataPopular : action.payload }
	}
	case VEHICLE_PIPOPULAR:{
		return { ...state, pIPopular : action.payload }
	}
	case VEHICLE_GETDATACATEGORY:{
		return { ...state, dataCategory: [ ...state.dataCategory, ...action.payload ]}
	}
	case VEHICLE_GETDATASEARCH:{
		return { ...state, dataSearch: action.payload }
	}
	case VEHICLE_CLEARDATASEARCH:{
		return { ...state, dataSearch: []}
	}
	case VEHICLE_PISEARCH:{
		return { ...state, pISearch: action.payload}
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
	case VEHICLE_SETSUCCESS : {
		return { ...state, successMsg : action.payload }
	}
	case VEHICLE_CLEARSUCCESS: {
		return { ...state, successMsg : '' }
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
	case VEHICLE_RESETDATADETAIL:{
		return { ...state, dataDetail : {}}
	}
	case VEHICLE_UPDATEVEHICLE:{
		console.log(action.payload, 'ini data update redux')
		state.dataCategory.map((item, idx) =>{
			if(item.id == action.payload.id){
				state.dataCategory[idx] = action.payload
			}
		})
		state.dataPopular.map((item, idx)=>{
			if(item.id == action.payload.id){
				state.dataPopular[idx] = action.payload
			}
		})
		return { ...state}
	}
	case VEHICLE_GETDATAVIEWMORE : {
		return {...state, dataViewMore : action.payload}
	}
	case VEHICLE_PIVIEWMORE:{
		return { ...state, pIViewMore : action.payload}
	}
	case VEHICLE_CLEARMSG:{
		return { ...state, errorMsg: '', successMsg: ''}
	}
	default:{
		return { ...state } 
	}
	}
}

export default vehicle
