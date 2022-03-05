const initialState = {
	results: [],
	pageInfo: {},
	isLoading:false,
	isError:false,
	errorMsg : ''
}

const vehicle = (state = initialState, action)=>{
	switch(action.type){
	case 'GET_VEHICLE_PENDING':{
		state.isLoading = true
		state.isError = false
		state.errorMsg = ''
		return {...state}
	}
	case 'GET_VEHICLE_FULFILLED':{
		const {data} = action.payload
		state.isLoading = false
		state.isError = false
		state.results = data.results
		state.pageInfo = data.pageInfo
		return {...state}
	}
	case 'GET_VEHICLE_REJECTED':{
		const {message} = action.payload.response.data
		state.isLoading = false
		state.isError = true
		state.errorMsg = message
		return {...state}
	}
	default:{
		return {...state}
	}
	}
}

export default vehicle