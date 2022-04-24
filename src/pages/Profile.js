/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import LayoutLogin from '../components/LayoutLogin'
import profile from '../assets/image/image 39.png'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import LoadingScreen from '../components/LoadingScreen'
import moment from 'moment'
import { doEditProfile } from '../redux/actions/user'

export const Profile = () => {
	const [changed, setChanged] = useState({})

	const dispatch = useDispatch()
	const auth = useSelector(state=>state.auth)
	const user = useSelector(state=> state.user)

	const editProfile = (event)=>{
		event.preventDefault()
		const data = {...changed}
		const gender = event.target.elements['gender'].value
		const address = event.target.elements['address'].value
		
		if(user.data.address !== address){
			data['address'] = address
		}
		if(user.data.gender !== gender){
			data['gender'] = gender
		}
		console.log(data)
		dispatch( doEditProfile(data, auth.token))
	}

	// const resetPassword = ()=>{
	// 	navigate('/resetPassword')
	// }

	return (
		<LayoutLogin>
			{!auth.token  && <Navigate to='/' />}
			{user.isLoading ? (
				<LoadingScreen />
			) : (
				<div className="profile-edit" id='editProfile'>
					<main className="container px-4 px-lg-0">
						<div className="my-5">
							<div className='fs-4 fw-bold'>Profile</div>
						</div>
						{user.errorMsg !== '' && (
							<div className="alert button-third shadow-dark alert-dismissible fade show text-center fs-5 fw-bold mb-4" role="alert">
								{user.errorMsg}
								<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
							</div>
						)
						}
						{user.successMsg !== '' &&(
							<div className="alert button-third shadow-dark alert-dismissible fade show text-center fs-5 fw-bold mb-4" role="alert">
								{user.successMsg}
								<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
							</div>
						)
						}
						<form onSubmit={editProfile}>
							<div>
								<div className="text-center mb-5">
									<div className="d-inline-block position-relative mb-5">
										<img
											src={user.data.image ? user.data.image : profile}
											className="img-profile rounded-circle"
											alt={String(user.data.id)}
										/>
										<button className="icon-circle-3 rounded-circle button-fourth position-absolute end-0 bottom-0">
											<i className="fa-solid fa-pencil"></i>
										</button>
									</div>
									<div className="pd-heading ">{user.data.fullName ? user.data.fullName : user.data.username}</div>
									<div className="text-muted fw-bold">
										<div>{user.data?.email}</div>
										<div>{user.data?.contact}</div>
										<div>Has been active since {moment(user.data?.createdAt).year()}</div>
									</div>
								</div>
								<div className="d-flex justify-content-center algin-items-center mb-5">
									<div className="me-5">
										<label className='radio-button d-flex align-items-center'>
											<input type='radio' name='gender' value='male' defaultChecked={user.data?.gender === 'Male' ? true : false} />
											<div className='checkmark'></div>
											<div className='text-radio ms-2'>Male</div>
										</label>
									</div>
									<div>
										<label className='radio-button d-flex align-items-center'>
											<input type='radio' name='gender' value='female' defaultChecked={user.data?.gender !== 'Male' ? true : false}/>
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
									<input type="email" name="email" className="w-100 d-inline-block border-0 border-bottom border-3 border-dark pb-3" defaultValue={user.data.email} onChange={(event)=>setChanged({ ...changed, email: event.target.value})}/>
								</div>
								<div className="mb-5">
									<label htmlFor="address">Address :</label>
									<textarea name="address" className="d-block w-100 border-0 border-bottom border-3 border-dark pb-0" id='address' defaultValue={user.data?.address} />
								</div>
								<div className="mb-5">
									<label htmlFor="contact" className='text-muted mb-2'>Mobile Number :</label>
									<input type="text" name="contact" className="w-100 d-inline-block border-0 border-bottom border-3 border-dark pb-3" defaultValue={user.data?.contact} onChange={(event)=>setChanged({ ...changed, contact: event.target.value})}/>
								</div>
								<div className="mb-5">
									<label htmlFor="fullName" className='text-muted mb-2'>Full Name:</label>
									<input type="text" name="fullName" className="w-100 d-inline-block border-0 border-bottom border-3 border-dark pb-3" defaultValue={user.data?.fullName} onChange={(event)=>setChanged({ ...changed, fullName: event.target.value})}/>
								</div>
								<div className="row row-cols-1 row-cols-lg-2 mb-5">
									<div className="col-lg-5 col mb-5 mb-lg-0">
										<label htmlFor="displayName" className='text-muted mb-2'>Display Name :</label>
										<input type="text" name="displayName" className="w-100 d-inline-block border-0 border-bottom border-3 border-dark pb-3" defaultValue={user.data?.displayName} onChange={(event)=>setChanged({ ...changed, displayName: event.target.value})}/>
									</div>
									<div className="col-lg-6 col ms-lg-auto">
										<label htmlFor="birthDate" className='text-muted mb-2'>birthDate :</label>
										<input type="date" name="birthDate" className="w-100 d-inline-block border-0 border-bottom border-3 border-dark pb-3" defaultValue={moment(user.data?.birthDate).format('YYYY-MM-DD')} onChange={(event)=>setChanged({ ...changed, birthDate: event.target.value})}/>
									</div>
								</div>
							</div>
							<div className="mb-4 mb-lg-5">
								<div className='row row-cols-1 row-cols-lg-3'>
									<div className='col mb-3 mb-lg-0'>
										<button className="button-third w-100 py-3 fs-4 fw-bolder" type='submit'>Save Change</button>
									</div>
									<div className='col mb-3 mb-lg-0'>
										<Link to='/resetPasswordUser'>
											<div className="button-second w-100 py-3 fs-4 fw-bolder text-center" >Edit Password</div>
										</Link>
									
									</div>
									<div className='col mb-3 mb-lg-0'>
										<button className="button-primer w-100 py-3 fs-4 fw-bolder">Cancel</button>
									</div>
								</div>
							</div>
						</form>
					
					</main>
				</div>
			)}
			
		</LayoutLogin>	
	)
}

export default Profile
