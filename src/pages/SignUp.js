import React from 'react'
import google from '../assets/image/google.png'
import { Link } from 'react-router-dom'
import logo from '../assets/image/logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { userSignUp } from '../redux/actions/user'

export const SignUp = () => {
	const dispatch = useDispatch()
	const user = useSelector(state=>state.user)

	const onSignUp = (event)=>{
		event.preventDefault()
		const username = event.target.elements['username'].value
		const email = event.target.elements['email'].value
		const password = event.target.elements['password'].value
		dispatch(userSignUp(username,email,password))
	}
	return (
		<>
			<div className='row g-0 vh-100 '>
				<div className='col d-none d-xl-flex'>
					<div className='img-1 img-side'></div>
				</div>
				<div className='col'>
					<div className='mx-6 my-5'>
						<div className='pd-heading fs-0 mb-5 text-center text-xl-start'>Sign Up</div>
						{user.isError &&
								<div className="alert button-third shadow-dark alert-dismissible fade show text-center fs-5 fw-bold" role="alert">
									{user.errorMsg}
									<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
								</div>
						}
						{!user.isError && user.isSuccess &&
								<div className="alert button-third shadow-dark alert-dismissible fade show text-center fs-5 fw-bold" role="alert">
									{user.successMsg}
									<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
								</div>
						}
						<div>
							<form onSubmit={onSignUp} id='signUp'>
								<input  type='text' placeholder="Username" name='username' className='w-100 button-grey py-4 mb-5 px-4 fs-4'/>						
								<input placeholder='Email' type='email' name='email' className='w-100 button-grey py-4 mb-5 px-4 fs-4'/>						
								<input placeholder='Password' type='password' name='password' className='w-100 button-grey py-4 mb-5 px-4 fs-4'/>
								<div>
									<button className='button-third w-100 py-4 text-center fs-4 fw-bolder shadow-yellow-2' type='submit'>Sign Up</button>
								</div>
								<div className='d-flex position-relative justify-content-center my-4 align-items-center '>
									<div className='border-bottom w-100 border-3'></div>
									<div className='fs-4 fw-bold grey-3 position-absolute bg-white mb-2'>or try another way</div>
								</div>
								<Link to='/login' >
									<button className='button-fourth w-100 py-4 text-center fs-4 fw-bolder shadow-yellow-2 mb-4'>Login</button>
								</Link>
								<button
									className="button-yellow fw-bolder fs-4 py-4 d-flex w-100 shadow-dark bg-light text-dark justify-content-center"
								>
									<img
										src={google}
										alt=""
										className="me-3"
									/>
									<Link to='../loginGoogle'>
										<div className='text-dark'>Login with Google</div>
									</Link>		
								</button>
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


export default SignUp