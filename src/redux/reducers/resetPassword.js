const initialState = {
   isLoading : false,
   isError : false,
   successMsg : '',
   errorMsg : '',
   successMsgEditPassword : ''
}

const resetPassword = (state = initialState, action)=>{
   switch(action.type){
   case 'POST_RESETPASSWORD_PENDING':{
      state.isLoading = true
      state.isError = false
      state.errorMsg = ''
      state.successMsg = ''
      return {...state}
   }
   case 'POST_RESETPASSWORD_FULFILLED':{
      const {message} = action.payload.data
      state.isLoading = false
      state.successMsg = message
      return {...state}
   }
   case 'POST_RESETPASSWORD_REJECTED':{
      const {message} = action.payload.response.data
      state.isLoading = false
      state.isError = true
      state.errorMsg = message
      return {...state}
   }
   case 'PATCH_EDITPASSWORD_PENDING':{
      state.isLoading = true
      state.isError = false
      state.errorMsg = ''
      state.successMsg = ''
      state.successMsgEditPassword = ''
      return {...state}
   }
   case 'PATCH_EDITPASSWORD_FULFILLED':{
      const {message} = action.payload.data
      state.isLoading = false
      state.successMsgEditPassword = message
      return {...state}
   }
   case 'PATCH_EDITPASSWORD_REJECTED':{
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

export default resetPassword