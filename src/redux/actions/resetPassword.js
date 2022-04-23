import http from '../../helpers/http'

export const resetPassword = (data)=>{
   const param = new URLSearchParams(data)
   return({
      type : 'POST_RESETPASSWORD',
      payload : http().post('/auth/forgotRequest',param)
   })
}

export const editPasswordUser = (data,token)=>{
   const param = new URLSearchParams(data)
   return({
      type : 'PATCH_EDITPASSWORD',
      payload : http(token).patch('/users/editPassword',param)
   })
}