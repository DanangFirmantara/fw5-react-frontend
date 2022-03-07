import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link} from 'react-router-dom'
import LayoutHome from '../components/LayoutHome'
// import reservation from '../redux/reducers/reservation'
import defaultImage from '../assets/image/image 6.png'


export const Payment = () => {
	const {vehicle,auth,counter,reservation} = useSelector(state=>state)
	const [vehicleServe, setVehicleServe] = useState({})
	const [userData,setUserData]= useState({})
	const total = counter.num * vehicleServe.price

	useEffect(async()=>{
		await setVehicleServe(vehicle.results[0])
		await setUserData(auth.userData[0])
	},[])

	const goBack = ()=>{
		window.history.back()
	}
	return (
		<LayoutHome >
			{/* {reservation.dataReservation[0].rentStartDate == undefined && <Navigate to='/vehicleType' />} */}
			<main>
				<div className="container my-5">
					<div className="d-flex align-items-center mb-5" >
						<button onClick={goBack} className="fa-solid fa-chevron-left icon dark fs-0 me-3" to="/reservation"></button>
						<div className="fs-1 fw-bold text-dark">Payment</div>
					</div>
					<div className="row mb-5">
						<div className="col-5">
							{/* <div className="img-banner-3 img-12 rounded mb-4"></div> */}
							<img src={vehicleServe?.image || defaultImage} alt={vehicle.results[0].name} className='img-banner-5 rounded d-none d-lg-flex'></img>
							<div className="border border-3 py-4 border-grey rounded mb-4 ">
								<div className="fw-bold fs-4 ps-5">Quantity : {counter.num} {vehicleServe.category} </div>
							</div>
							<div className="border border-3 py-4 border-grey rounded ">
								<div className="fw-bolder fs-4 ps-5">Order details :</div>
								<div className="ps-5 fs-4">{counter.num} {vehicleServe.category} : Rp. {new Intl.NumberFormat('de-DE').format(total)}</div>
								<div className="fw-bolder fs-4 ps-5 mt-3">Total : {new Intl.NumberFormat('de-DE').format(total)}</div>
							</div>
						</div>
						<div className="col">
							<div className="pd-bolder">{vehicleServe.name}</div>
							<div className="pd-heading fw-light fs-1 mb-3">{vehicleServe.location}</div>
							<div className="grey-2 fw-bold fs-4 mb-3">No Prepayment</div>
							<div className="pd-heading fs-1 mb-3">#FG1209878YZS</div>
							<button className="button-third fw-bold fs-4 p-1 mb-4">
								<div className="px-2">Copy booking code</div>
							</button>
							<div className="border border-3 py-4 border-grey rounded mb-4 ">
								<div className="d-flex justify-content-between">
									<div className="fw-bold fs-4 ps-5">
				Reservation Date :
									</div>
									<div className="dark fs-4 pe-6">{reservation.dataReservation[0].rentStartDate}</div>
								</div>
							</div>
							<div className="border border-3 py-4 border-grey rounded ">
								<div className="fw-bolder fs-4 ps-5">Identity :</div>
								<div className="ps-5 fs-4">{userData.fullName? userData.fullName : userData.username} ( {userData.contact} )</div>
								<div className="ps-5 fs-4"></div>
							</div>
						</div>
					</div>
					<div className="row d-flex justify-content-between align-items-center mb-6">
						<div className="col-3"> 
							<div className="fw-bold fs-2 ">Payment code :</div>  
						</div>
						<div className="col">
							<div className='d-flex position-relative align-items-center'>
								<div className="border border-grey border-3 fs-4 fw-bold py-4 rounded d-flex align-items-center px-5 w-100">#FG1209878YZS</div>
								<div className="button-fourth text-center py-2 px-4 position-absolute end-0 me-4"> Copy</div>
							</div>
						</div>
						<div className="col-4">
							<div className='d-flex position-relative align-items-center'>
								<div className="border border-grey border-3 w-100 rounded fs-4 py-4 px-4">Select payment method</div>
								<div className="fa-solid fa-chevron-down position-absolute fs-2 end-0 me-3 third"></div>
							</div>
						</div>
					</div>
					<Link to="../history">
						<div className="button-third shadow-yellow py-4 d-flex justify-content-center fw-bolder fs-4">
							<div className="fw-bolder">Finish payment :</div>
							<div className="text-danger fw-bolder">59:30</div>
						</div>
					</Link>
				</div>
			</main>
		</LayoutHome>
	)
}

export default Payment