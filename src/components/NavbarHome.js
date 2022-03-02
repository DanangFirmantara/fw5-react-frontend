import React, { Component } from 'react'
import logo from '../assets/image/logo.png'
import { Link } from 'react-router-dom'

export default class NavbarHome extends Component{
	render(){
		return (
			<React.Fragment>
				<nav className="navbar navbar-expand-lg bg-primer">
					<div className="container navbar-content mx-5">
						<Link className="navbar-brand" to="/">
							<img src={logo} alt="logo" className="brand" />
						</Link>
						<button
							className="navbar-toggler "
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon "></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav ms-md-auto mb-md-0 mb-4">
								<li className="nav-item text-center">
									<Link className="nav-link link-secondary mx-md-3 second" aria-current="page" to="/" >Home</Link>
								</li>
								<li className="nav-item text-center">
									<Link className="nav-link link-secondary mx-md-3 second" to="vehiclesType"
									>Vehicle Type
									</Link>							
								</li>
								<li className="nav-item text-center">
									<Link className="nav-link link-secondary mx-md-3 second" to="history">History</Link>
								</li>
								<li className="nav-item text-center">
									<Link className="nav-link link-secondary mx-md-3 second" to="about">About</Link>
								</li>
							</ul>
							<div className="">
								<div className="d-flex flex-column align-items-center justify-content-around ">
									<Link to="login" className='w-100'>
										<div className="button-second py-2 text-center button-width me-lg-4 mb-3">
                        Login
										</div>
									</Link>
									<Link to="signUp" className='w-100'>
										<div className="button-primer py-2 text-center button-width">
                        Register
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</React.Fragment>
		)
	}
}