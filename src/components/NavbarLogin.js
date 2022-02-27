import React, { Component } from 'react'
import logo from '../assets/image/logo.png'
import profile from '../assets/image/image 39.png'
import { Link } from 'react-router-dom'

export default class NavbarLogin extends Component {
	render() {
		return (
			<>
				<nav className="navbar navbar-expand-lg p-0 bg-primer">
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
									<Link className="nav-link link-secondary mx-3 second" aria-current="page" to="/"
									>Home</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link link-secondary mx-3 second" to="../vehiclesType"
									>Vehicle Type</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link link-secondary mx-3 second" to="../vehicle"
									>Vehicle Create</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link link-secondary mx-3 second" to="../history">History</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link link-secondary mx-3 second" to="../about">About</Link>
								</li>
							</ul>
							<div className="ms-5">
                        
								<div className="d-flex align-items-center">
									<Link to="../history">
										<div className="d-flex position-relative message mx-5">
											<i className="fa-regular fa-envelope icon fiveth"></i>
											<button className="notif-icon">1</button>
										</div>
									</Link>
									<Link to="../profile">
										<div>
											<img
												src={profile}
												className="rounded-circle icon-image"
												alt="Profile"
											/>
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</>
		)
	}
}
