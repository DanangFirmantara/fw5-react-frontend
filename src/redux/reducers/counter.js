const initialState={
	num : 0
}

const counter = (state=initialState, action)=>{
	switch(action.type){
	case'COUNTER_INCREAMENT':{
		state.num++
		return {...state}
	}
	case 'COUNTER_DECREAMENT':{
		state.num--
		return {...state}
	}
	default:{
		return {...state}
	}
	}
}

export default counter