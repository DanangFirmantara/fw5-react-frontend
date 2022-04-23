/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import google from '../assets/image/google.png'
import { Link, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { doLogin, getDataUser, login } from '../redux/actions/auth'
import { Button } from 'react-bootstrap'
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'

export const LoginPage = () => {
	const auth = useSelector(state=>state.auth)
	const [show, setShow] = useState(false)
	const dispatch = useDispatch()
	
	const onLogin = (event) =>{
		event.preventDefault()
		const username = event.target.elements['email'].value
		const password = event.target.elements['password'].value
		dispatch(doLogin(username, password))
	}
	return (
		<React.Fragment>
			{auth.token !== '' && (<Navigate to='/' />)}
			<header>
				<div className="img-banner-4 img-3">
					<div className="img-banner-4 cover-dark">
						<div className="container py-7 px-4 px-lg-0">
							{auth.errorMsg &&
								(
									<div className="alert button-third shadow-dark alert-dismissible fade show text-center fs-5 fw-bold" role="alert">
										{auth.errorMsg}
										<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
									</div>
								)
							}
							<div className="row justify-content-between flex-column flex-lg-row">
								<div className="col">
									<div className="pd-heading fs-0-0 mb-4 text-center text-lg-start">Let&rsquo;s Explore <br />The World
									</div>
									<div className="text-white fs-4 fw-bold mb-2 d-none d-lg-block">Don&rsquo;t have account</div>
									<Link to="../signUp">
										<div className="d-none d-lg-block fw-bolder button-third w-75	text-center py-4 shadow-light fs-4">Sign up</div>
									</Link>
								</div>
								<div className="col-2 d-none d-lg-block">
									<div className="d-flex flex-column align-items-center">
										<div className="icon-circle rounded-circle border bg-white"></div>
										<div className="vh-100 border border-1"></div>
										<div className="icon-circle rounded-circle border bg-white"></div>
									</div>
								</div>
								<div className="col">
									<div className="pt-5">
										<form onSubmit={onLogin}>
											<input
												type="text"
												placeholder="Username or Email"
												name='email'
												autoComplete='off'
												className="button-light w-100 py-4 fw-bold fs-4 ps-5 shadow-dark mb-4"
											/>
											<div className='d-flex position-relative align-items-center mb-3'>
												<input
													type={show? 'text' : 'password'}
													placeholder="Password"
													name='password'
													className="button-light w-100 py-4 fw-bold fs-4 ps-5 shadow-dark"
												/>
												<Button onClick={()=> setShow(!show)} className='position-absolute end-0 bg-transparent border-0 fs-1 d-flex align-items-center me-2'>
													{show? (<AiFillEye />) : (<AiFillEyeInvisible />)}
												</Button>
											</div>
											<div className="mb-5">
												<Link to="/forgotPassword" className="fs-6 fw-bold text-white">Forgot password?</Link>
											</div>
											<div className="mb-4">
												<button
													className="button-fourth fw-bolder fs-4 py-4 text-center w-100 shadow-yellow"
													type='submit'
												>
										Login
												</button>
											</div>
											<div className="mb-4">
												<button className="button-yellow fw-bolder fs-4 py-4 d-flex w-100 shadow-light bg-light text-dark justify-content-center">
													<img
														src={google}
														alt=""
														className="me-3"
													/>
													<Link to='../loginGoogle'>
														<div className='text-dark'>Login with Google</div>
													</Link>
												</button>
											</div>
											<div className="text-white fs-4 fw-bold mb-2 d-lg-none">Don&rsquo;t have account</div>
											<Link to="../signUp">
												<div className="d-lg-none fw-bolder button-third w-100 text-center py-4 shadow-light fs-4">Sign up</div>
											</Link>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
			<Footer/>
		</React.Fragment>
	)
}


// const mapStateToProps = state =>({auth:state.auth})

// const mapDispatchToProps = dispatch => ({dispatch})

// export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)

export default LoginPage
