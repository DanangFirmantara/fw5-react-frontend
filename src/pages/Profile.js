import React, { useEffect, useState } from 'react'
import LayoutLogin from '../components/LayoutLogin'
import profile from '../assets/image/image 39.png'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export const Profile = () => {
	const auth = useSelector(state=>state.auth)
	const [userData, setUserData] = useState({})

	useEffect(()=>{
		getUserData()
	},[])

	const getUserData = ()=>{
		setUserData(auth.userData[0])
	}
	return (
		<LayoutLogin>
			{!auth.token && <Navigate to='/' />}
			<form className="profile-edit">
				<main className="container px-4 px-lg-0">
					<div className="my-5">
						<div className='fs-4 fw-bold'>Profile</div>
					</div>
					<div className="text-center mb-5">
						<div className="d-inline-block position-relative mb-5">
							<img
								src={profile}
								className="img-profile rounded-circle"
								alt="Profile"
							/>
							<button className="icon-circle-3 rounded-circle button-fourth position-absolute end-0 bottom-0">
								<i className="fa-solid fa-pencil"></i>
							</button>
						</div>
						<div className="pd-heading ">{userData.fullName}</div>
						<div className="text-muted fw-bold">
							<div>{userData.email}</div>
							<div>{userData.contact}</div>
							<div>Has been active since 2013</div>
						</div>
					</div>
					<div className="d-flex justify-content-center algin-items-center mb-5">
						<div className="me-5">
							<label className='radio-button d-flex align-items-center'>
								<input type='radio' name='gender'/>
								<div className='checkmark'></div>
								<div className='text-radio ms-2'>Male</div>
							</label>
						</div>
						<div>
							<label className='radio-button d-flex align-items-center'>
								<input type='radio' name='gender'/>
								<div className='checkmark'></div>
								<div className='text-radio ms-2'>Female</div>
							</label>
						</div>
					</div>
					<div className="mb-3">
						<div className='fw-bold fs-4'>Contacts</div>
					</div>
					<div className="mb-5">
						<label htmlFor="email" className='text-muted mb-2'>Email Address :</label>
						<input type="email" name="email" className="w-100 d-inline-block border-0 border-bottom border-3 border-dark pb-3" />
					</div>
					<div className="mb-5">
						<label htmlFor="address">Address :</label>
						<textarea name="address" className="d-block w-100 border-0 border-bottom border-3 border-dark pb-0" ></textarea>
					</div>
					<div className="mb-5">
						<label htmlFor="mobileNumber" className='text-muted mb-2'>Mobile Number :</label>
						<input type="email" name="mobileNumber" className="w-100 d-inline-block border-0 border-bottom border-3 border-dark pb-3" />
					</div>
					<div className="row row-cols-1 row-cols-lg-2 mb-5">
						<div className="col-lg-5 col mb-5 mb-lg-0">
							<label htmlFor="displayName" className='text-muted mb-2'>Display Name :</label>
							<input type="displayName" name="displayName" className="w-100 d-inline-block border-0 border-bottom border-3 border-dark pb-3" />
						</div>
						<div className="col-lg-6 col ms-lg-auto">
							<label htmlFor="birthDate" className='text-muted mb-2'>birthDate :</label>
							<input type="date" name="birthDate" className="w-100 d-inline-block border-0 border-bottom border-3 border-dark pb-3"/>
						</div>
					</div>
					<div className="mb-4 mb-lg-5">
						<div className='row row-cols-1 row-cols-lg-3'>
							<div className='col mb-3 mb-lg-0'>
								<button className="button-third w-100 py-3 fs-4 fw-bolder">Save Change</button>
							</div>
							<div className='col mb-3 mb-lg-0'>
								<button className="button-second w-100 py-3 fs-4 fw-bolder">Edit Password</button>
							</div>
							<div className='col mb-3 mb-lg-0'>
								<button className="button-primer w-100 py-3 fs-4 fw-bolder">Cancel</button>
							</div>
						</div>
					</div>
				</main>
			</form>
		</LayoutLogin>	
	)
}

export default Profile