import React, { useEffect } from 'react'
import logo from '../assets/image/logo.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getDataUser } from '../redux/actions/auth'
import profiles from '../assets/image/image 39.png'


const NavbarHome = () => {
	const auth = useSelector(state=>state.auth)
	const dispatch = useDispatch()

	useEffect(()=>{
		if(auth.token){
			dispatch(getDataUser(auth.token))
		}
	},[])

	return (
		<React.Fragment>
			<nav className="navbar navbar-expand-lg bg-primer navbar-dark">
				<div className="container navbar-content mx-5 ">
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
								<Link className="nav-link link-secondary mx-md-3 second" to="/vehiclesType"
								>Vehicle Type
								</Link>							
							</li>
							{auth.token &&
								<li className="nav-item text-center">
									<Link className="nav-link link-secondary mx-md-3 second" to="/history">History</Link>
								</li>
							}
							<li className="nav-item text-center">
								<Link className="nav-link link-secondary mx-md-3 second" to="/about">About</Link>
							</li>
						</ul>
						<div className="">
							{!auth.token &&
								<div className="d-flex flex-column flex-lg-row align-items-center justify-content-around ">
									<Link to="/login" className='w-100'>
										<div className="button-second py-2 fs-5 fw-bold text-center button-width me-lg-4 mb-3 mb-lg-0">
										Login
										</div>
									</Link>
									<Link to="/signUp" className='w-100'>
										<div className="button-primer py-2 text-center button-width fs-5 fw-bold">
										Register
										</div>
									</Link>
								</div>
							}
							{ auth.token &&
								<div className='ms-3 d-flex align-items-center'>
									<button onClick={()=>dispatch({type:'AUTH_LOGOUT'})} className='button-primer fs-5 py-2 text-center button-width fw-bold w-100'>
									Logout
									</button>
									<Link to="/history">
										<div className="d-lg-flex d-none position-relative message mx-3">
											<i className="fa-regular fa-envelope icon fiveth"></i>
											<button className="notif-icon">1</button>
										</div>
									</Link>
									<Link to="/profile">
										<div className='d-lg-flex d-none'>
											<img
												src={auth.userData.image || profiles}
												className="rounded-circle icon-image"
												alt="Profile"
											/>
										</div>
										<div className='second fs-5 d-lg-none'>Profile</div>
									</Link>
								</div>
							}
						</div>
					</div>
				</div>
			</nav>
		</React.Fragment>
	)
}

export default NavbarHome