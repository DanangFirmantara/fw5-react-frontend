import React, { Component } from 'react'
import logo from '../assets/image/logo.png'
import { Link } from 'react-router-dom'

export default class NavbarHome extends Component{
	render(){
		return (
			<React.Fragment>
				<nav className="navbar navbar-expand-lg p-0">
					<div className="container navbar-content">
						<Link className="navbar-brand" to="/">
							<img src={logo} alt="logo" className="brand" />
						</Link>
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
									<Link className="nav-link link-secondary mx-3" aria-current="page" to="/" >Home</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link link-secondary mx-3 active" to="vehiclesType"
									>Vehicle Type
									</Link>							
								</li>
								<li className="nav-item">
									<Link className="nav-link link-secondary mx-3" to="history">History</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link link-secondary mx-3" to="about">About</Link>
								</li>
							</ul>
							<div className="ms-5">
								<div className="d-flex align-items-center">
									<Link to="login">
										<div className="button-white py-2 text-center button-width mx-4">
                        Login
										</div>
									</Link>
									<Link to="signUp">
										<div className="button-yellow py-2 text-center button-width">
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