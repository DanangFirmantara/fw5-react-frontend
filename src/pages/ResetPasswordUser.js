import React from 'react'
import logo from '../assets/image/logo.png'
import { Link, Navigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {	editPasswordUser } from '../redux/actions/resetPassword'

const ResetPasswordUser = () => {
   const resetPassword = useSelector(state=>state.resetPassword)
   const auth = useSelector(state=>state.auth)
   const dispatch = useDispatch()

   const onResetPassword = (event)=>{
      event.preventDefault()
      const oldPassword = event.target.elements['oldPassword'].value
      const newPassword = event.target.elements['newPassword'].value
      const newPasswordConfirm = event.target.elements['newPasswordConfirm'].value
      const data = {oldPassword, newPassword, newPasswordConfirm}
      console.log(auth.token, 'ini tokennya')
      console.log(data, 'ini datanya')
      dispatch(editPasswordUser(data, auth.token))
   }
   return (
      <>
         {!auth.token && <Navigate to='/login' />}
         <div className='row g-0 vh-100 '>
            <div className='col d-none d-xl-flex'>
               <div className='img-15 img-side'></div>
            </div>
            <div className='col'>
               <div className='mx-6 my-5'>
                  <div className='pd-heading fs-0 mb-5 text-center text-xl-start'>Reset Password</div>
                  {resetPassword?.isError &&
								<div className="alert button-third shadow-dark alert-dismissible fade show text-center fs-5 fw-bold mb-3" role="alert">
								   {resetPassword.errorMsg}
								   <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
								</div>
                  }
                  {resetPassword?.successMsgEditPassword &&
								<div className="alert button-third shadow-dark alert-dismissible fade show text-center fs-5 fw-bold mb-3" role="alert">
								   {resetPassword.successMsgEditPassword}
								   <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
								</div>
                  }
                  <div>
                     <form onSubmit={onResetPassword} id='signUp'>						
                        <input placeholder='Old Password' type='password' name='oldPassword' className='w-100 button-grey py-4 mb-5 px-4 fs-4'/>
                        <input placeholder='New Password' type='password' name='newPassword' className='w-100 button-grey py-4 mb-5 px-4 fs-4'/>
                        <input  type='password' placeholder="New Confirm Password" name='newPasswordConfirm' className='w-100 button-grey py-4 mb-5 px-4 fs-4'/>						
                        <div>
                           <button className='button-third w-100 py-4 text-center fs-4 fw-bolder shadow-yellow-2' type='submit'>Reset Password</button>
                        </div>
                     </form>
                  </div>
               </div>
               <footer >
                  <div className='px-5 bg-primer pt-6'>
                     <div className='mb-5'>
                        <Link to="/">
                           <img src={logo} alt='Logo' className='brand'></img>
                        </Link>
                     </div>
                     <div>
                        <div className='float-start fs-5 fourth fw-light mb-5'>Plan and book your perfect trip with <br/> expert advice, travel tips for vehicle <br/>  information from us
                        </div>
                     </div>
                     <div>
                        <div className='float-start fs-5 fourth fw-light mb-5'>
					©2020 Vehicle Rental Center. All rights reserved
                        </div>
                     </div>
                     <div className="d-flex justify-content-center underline w-75 mx-auto "></div>
                     <div className="d-flex justify-content-center py-5 fs-2 second">
                        <i className="fa-brands fa-twitter mx-3"></i>
                        <i className="fa-brands fa-facebook-f mx-3"></i>
                        <i className="fa-brands fa-instagram mx-3"></i>
                        <i className="fa-brands fa-linkedin-in mx-3"></i>
                        <i className="fa-brands fa-youtube mx-3"></i>
                     </div>
                  </div>
               </footer>
			
			
            </div>
         </div>
      </>
   )
}

export default ResetPasswordUser