import http from '../../helpers/http'

export const reservation = (data)=>{
   return{
      type : 'RESERVATION_ADD',
      payload : data
   }
}

export const createReservation = (data)=>{
   const param = new URLSearchParams(data)

   return{
      type : 'RESERVATION_CREATE',
      payload : http().post('/history', param)
   }
}