const initialState = {
   isloading: false,
   isError : false,
   errorMsg : '',
   successMsg : '',
   historyData : [],
   pageInfo :[]
}

const history = (state = initialState, action)=>{
   switch(action.type){
   case 'HISTORY_USERDATA_PENDING':{
      state.isloading = true
      state.isError = false
      state.errorMsg = ''
      state.successMsg = ''
      state.historyData = []
      state.pageInfo = []
      return {...state}
   }
   case 'HISTORY_USERDATA_FULFILLED':{
      const {message, results, pageInfo} = action.payload.data
      state.successMsg = message
      state.historyData = results
      state.pageInfo = pageInfo
      state.isloading = false
      return {...state}
   }
   case 'HISTORY_USERDATA_REJECTED':{
      const {message} = action.payload.response.data
      state.isError = true
      state.isloading = false
      state.errorMsg = message
      return {...state}
   }
   default :{
      return {...state}
   }
   }
}

export default history