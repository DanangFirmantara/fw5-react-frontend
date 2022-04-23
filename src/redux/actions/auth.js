import http from '../../helpers/http'

export const login = (email, password) =>{
   const param = new URLSearchParams() //query string-like body
   param.append('username', email) // karena backend membutuhkan data username ; * ketika input username atau email data tetap berhasil ditangkap
   param.append('password', password)
   return({
      type: 'AUTH_LOGIN',
      payload : http().post('/auth/login', param)
   })
}

export const getDataUser = (token)=>{
   return({
      type: 'AUTH_USERDATA',
      payload : http(token).get('/profiles')
   })
}

export const userEdit = (data,id)=>{
   const param = new URLSearchParams(data)
   return({
      type: 'AUTH_USEREDIT',
      payload: http().patch(`/users/?id=${id}`,param)
   })	
}

export const forgotRequest = (email)=>{
   const param = new URLSearchParams()
   param.append('email', email)
   return ({
      type: 'AUTH_FORGOTREQUEST',
      payload : http().post('/auth/forgotRequest', param)
   })
}
