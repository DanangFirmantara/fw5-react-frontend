import React, { Component } from 'react'
import logo from '../assets/image/logo.png'

export default class NavbarHome extends Component{
	render(){
		return (
			<React.Fragment>
				<nav className="navbar navbar-expand-lg p-0">
					<div className="container navbar-content">
						<a className="navbar-brand" href="#">
							<img src={logo} alt="logo" className="brand" />
						</a>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav ms-auto mb-lg-0">
								<li className="nav-item">
									<a className="nav-link link-secondary mx-3" aria-current="page" href="/home-2.html"
									>Home</a
									>
								</li>
								<li className="nav-item">
									<a className="nav-link link-secondary mx-3 active" href="/vehicle-type.html"
									>Vehicle Type
									</a>							
								</li>
								<li className="nav-item">
									<a className="nav-link link-secondary mx-3" href="/history.html">History</a>
								</li>
								<li className="nav-item">
									<a className="nav-link link-secondary mx-3" href="#">About</a>
								</li>
							</ul>
							<div className="ms-5">
								<div className="d-flex align-items-center">
									<a href="/login-2.html">
										<div className="button-white py-2 text-center button-width mx-4">
                        Login
										</div>
									</a>
									<a href="/sign-up.html">
										<div className="button-yellow py-2 text-center button-width">
                        Register
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</React.Fragment>
		)
	}
}