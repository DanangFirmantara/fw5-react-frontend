import React, {Component } from 'react'
import Footer from '../components/Footer'


export default class LoginPage extends Component{
	state = {
		email:'',
		password:''
	}
	handleChange(event){
		this.setState({
			email: event.target.email
		})
	}
	componentDidUpdate(){
		console.log(this.state)
	}
	render(){
		return (
			<React.Fragment>
				<header>
					<div className="img-banner-4 img-3">
						<div className="img-banner-4 cover-dark">
							<div className="container py-7">
								<div className="row justify-content-between">
									<div className="col">
										<div className="pd-heading fs-0-0 mb-4">Let&rsquo;s Explore <br />The World
										</div>
										<div href="" className="text-white fs-4 fw-bold mb-4">Don&rsquo;t have account</div>
										<a href="/sign-up.html">
											<div
												className="fw-bolder button-dark w-75 text-center py-4 shadow-light fs-4"
											>
                              Sign up
											</div>
										</a>
									</div>
									<div className="col-2">
										<div className="d-flex flex-column align-items-center">
											<div className="icon-circle rounded-circle border bg-white"></div>
											<div className="vh-100 border border-1"></div>
											<div className="icon-circle rounded-circle border bg-white"></div>
										</div>
									</div>
									<div className="col">
										<div className="pt-7">
											<form >
												<input
													type="email"
													placeholder="Email"
													value={this.state.email}
													onChange={this.handleChange}
													className="button-light w-100 py-4 fw-bold fs-4 ps-5 shadow-dark mb-4"
												/>
												<input
													type="password"
													placeholder="Password"
													className="button-light w-100 py-4 fw-bold fs-4 ps-5 shadow-dark mb-3"
												/>
												<div className="mb-5">
													<a
														href="/forgot-password.html"
														className="fs-6 fw-bold text-white"
													>Forgot password?</a
													>
												</div>
												<div className="mb-4">
													<button
														className="button-yellow fw-bolder fs-4 py-4 text-center w-100 shadow-yellow"
													>
                                       Login
													</button>
												</div>
												<div className="">
													<button
														className="button-yellow fw-bolder fs-4 py-4 d-flex w-100 shadow-light bg-light text-dark justify-content-center"
													>
														<img
															src="/assets/image/google.png"
															alt=""
															className="me-3"
														/>
														<div>Login with Google</div>
													</button>
												</div>
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
}