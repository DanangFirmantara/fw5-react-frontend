import {combineReducers} from 'redux'

const initialState = {
	token : null
}

const rootReducer = combineReducers({
	auth: (state=initialState, action) =>{
		switch(action.type){
		case 'LOGIN' :{
			const {email, password} = action.payload
			if(email==='admin@mail.com' && password==='admin'){
				state.token = 'abc'
				return state
			} else{
				alert('Wrong username')
				state.token = null
				return state
			}
		}
		case 'LOGOUT' :{
			state.token = null
			return state 
		}
		default : {
			return {...state}
		}}
	}
})

export default rootReducer