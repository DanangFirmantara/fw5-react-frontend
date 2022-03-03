/* eslint-disable react/prop-types */
import React from 'react'
import logo from '../assets/image/logo.png'
import profile from '../assets/image/image 39.png'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

export const NavbarLogin = ({ dispatch}) => {
	const onLogout = ()=>{
		dispatch({
			type:'LOGOUT'
		})
	}
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark p-0 bg-primer">
				<div className="container navbar-content mx-5">
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
						<ul className="navbar-nav ms-auto mb-3 mb-lg-0">
							<li className="nav-item text-center">
								<Link className="nav-link link-secondary mx-3 second" aria-current="page" to="/"
								>Home</Link>
							</li>
							<li className="nav-item text-center">
								<Link className="nav-link link-secondary mx-3 second" to="../vehiclesType"
								>Vehicle Type</Link>
							</li>
							{/* <li className="nav-item">
						<Link className="nav-link link-secondary mx-3 second" to="../vehicle"
						>Vehicle Create</Link>
					</li> */}
							<li className="nav-item text-center">
								<Link className="nav-link link-secondary mx-3 second" to="../history">History</Link>
							</li>
							<li className="nav-item text-center">
								<Link className="nav-link link-secondary mx-3 second" to="../about">About</Link>
							</li>
						</ul>
						<div>
							<button onClick={onLogout}>
								Logout
							</button>
						</div>
						<div className="d-flex align-items-center justify-content-center">
							<Link to="../history">
								<div className="d-lg-flex d-none position-relative message mx-5">
									<i className="fa-regular fa-envelope icon fiveth"></i>
									<button className="notif-icon">1</button>
								</div>
							</Link>
							<Link to="../profile">
								<div className='d-lg-flex d-none'>
									<img
										src={profile}
										className="rounded-circle icon-image"
										alt="Profile"
									/>
								</div>
								<div className='second fs-5 d-lg-none'>Profile</div>
							</Link>
						</div>
					</div>
				</div>
			</nav>
		</>
	)
}

const mapStateToProps = state =>({auth:state.auth})
const mapDispatchToProps = dispatch =>({dispatch})

export default connect(mapStateToProps, mapDispatchToProps)(NavbarLogin)