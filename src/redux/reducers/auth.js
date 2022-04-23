
const initialState = {
   token : null,
   userData : [],
   isLoading : false,
   isError : false,
   successMsg : '',
   successMsgUpdated: '',
   errorMsg : '',
   successMsgForgot: ''
}

const auth = (state=initialState, action)=>{
   switch(action.type){
   case 'AUTH_LOGIN_PENDING':{
      state.isLoading = true
      state.isError = false
      state.successMsg = ''
      state.errorMsg = ''
      state.successMsgUpdated = ''
      return {...state}
   }
   case 'AUTH_LOGIN_FULFILLED':{
      const {results, message} = action.payload.data 
      state.isLoading = false
      state.isError = false
      state.token = results
      state.successMsg = message
      window.localStorage.setItem('token', state.token)
      return {...state}
   }
   case 'AUTH_LOGIN_REJECTED':{
      state.isLoading = false
      state.isError = true
      state.errorMsg = 'check your email, username, and password'
      return {...state}
   }
   case 'AUTH_LOGOUT':{
      state.token = null
      state.userData = []
      window.localStorage.removeItem('token')
      return {...state}
   }
   case 'AUTH_USERDATA_PENDING':{
      state.isLoading = true
      state.isError = false
      state.errorMsg = ''
      state.successMsg = ''
      return {...state}
   }
   case 'AUTH_USERDATA_FULFILLED':{
      const {results, message} = action.payload.data
      state.isLoading = false
      state.isError = false
      state.successMsg = message
      state.userData = results
      return {...state}
   }
   case 'AUTH_USERDATA_REJECTED':{
      const {message} = action.payload.response.data
      console.log(message)
      state.isLoading = false
      state.isError = true
      state.errorMsg = message
      return {...state}
   }
   case 'AUTH_USEREDIT_PENDING':{
      state.isLoading = true
      state.isError = false
      state.errorMsg = ''
      state.successMsg = ''
      state.successMsgUpdated = ''
      return {...state}
   }
   case 'AUTH_USEREDIT_FULFILLED':{
      const {results, message} = action.payload.data
      state.isLoading = false
      state.isError = false
      state.successMsgUpdated = message
      state.userData = results
      return {...state}
   }
   case 'AUTH_USEREDIT_REJECTED':{
      const {message} = action.payload.response.data
      console.log(message)
      state.isLoading = false
      state.isError = true
      state.errorMsg = message
      return {...state}
   }
   case 'AUTH_FORGOTREQUEST_PENDING':{
      state.isLoading = true 
      state.isError = false
      state.errorMsg = ''
      state.successMsg = ''
      return {...state}
   }
   case 'AUTH_FORGOTREQUEST_FULFILLED':{
      const {message} = action.payload.data
      state.isLoading = false
      state.successMsgForgot = message
      return {...state}
   }
   case 'AUTH_FORGOTREQUEST_REJECTED':{
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

export default auth