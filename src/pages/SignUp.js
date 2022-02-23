import React, { Component } from 'react'
import google from '../assets/image/google.png'
import { Link } from 'react-router-dom'
import logo from '../assets/image/logo.png'

export class SignUp extends Component {
	render() {
		return (
			<>
				<div className='row g-0 vh-100'>
					<div className='col'>
						<div className='img-1 img-side'></div>
					</div>
					<div className='col'>
						<div className='mx-6 my-5'>
							<div className='pd-heading fs-0 mb-5'>Sign Up</div>
							<div>
								<form>
									<input  type='text' placeholder="Name"  className='w-100 button-grey py-4 mb-5 px-4 fs-4'/>						
									<input placeholder='Email' type='email' className='w-100 button-grey py-4 mb-5 px-4 fs-4'/>						
									<input placeholder='Password' type='password' className='w-100 button-grey py-4 mb-5 px-4 fs-4'/>
									<div>
										<button className='button-yellow w-100 py-4 text-center fs-4 fw-bolder shadow-yellow-2'>Sign Up</button>
									</div>
									<div className='d-flex position-relative justify-content-center my-4'>
										<div className='fs-4 fw-bold grey-3 ' >or try another way</div>
										<div className='border-bottom border-3 border-dark position-absolute bottom-0 start-0'></div>
									</div>
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
							<div className='px-5 bg-grey pt-6'>
								<div className='mb-5'>
									<Link to="/">
										<img src={logo} alt='Logo'></img>
									</Link>
								</div>
								<div>
									<div className='float-start fs-5 text-muted fw-light mb-5'>Plan and book your perfect trip with <br/> expert advice, travel tips for vehicle <br/>  information from us
									</div>
								</div>
								<div>
									<div className='float-start fs-5 text-muted fw-light mb-5'>
								©2020 Vehicle Rental Center. All rights reserved
									</div>
								</div>
								<div className="d-flex justify-content-center underline w-75 mx-auto "></div>
								<div className="d-flex justify-content-center py-5 fs-2 dark">
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
}

export default SignUp