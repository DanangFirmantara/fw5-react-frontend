import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import LayoutHome from '../components/LayoutHome'
import defaultImage from '../assets/image/image 6.png'


export const Payment = () => {
	const vehicle = useSelector(state=>state.vehicle)
	const counter = useSelector(state=>state.counter)
	const reservation = useSelector(state=>state.reservation)
	const auth = useSelector(state=>state.auth)
	const total = counter.num * vehicle.results[0].price

	const goBack = ()=>{
		window.history.back()
	}
	return (
		<LayoutHome >
			<main>
				<div className="container my-5">
					<div className="d-flex align-items-center mb-5" >
						<button onClick={goBack} className="fa-solid fa-chevron-left icon dark fs-0 me-3" to="/reservation"></button>
						<div className="fs-1 fw-bold text-dark">Payment</div>
					</div>
					<div className='row justify-content-around'>
						<div className='col-5'>
							<img src={vehicle?.results[0].image || defaultImage} alt={vehicle?.results[0].name} className='img-banner-5 rounded d-none d-lg-flex'></img>
						</div>
						<div className='col-6'>
							<div>
								<div className="pd-bolder">{vehicle?.results[0].name}</div>
							</div>
							<div>
								<div className="pd-heading fw-light fs-1 mb-3">{vehicle?.results[0].location}</div>
							</div>
							<div>
								<div className="grey-2 fw-bold fs-4 mb-3">No Prepayment</div>
							</div>
							<div>
								<div className="pd-heading fs-1 mb-3">#FG1209878YZS</div>
							</div>
							<div>
								<button className="button-third fw-bold fs-4 p-1 mb-4">
									<div className="px-2">Copy booking code</div>
								</button>
							</div>
						</div>
					</div>
					<div className='row justify-content-around'>
						<div className='col-5 border border-3 py-4 border-grey rounded mb-4'>
							<div className='mx-4 d-flex align-items-center'>
								<div className='fw-bold fs-5'>Quantity : <span className='fw-normal'>{reservation.dataReservation[0].quantity } {vehicle.results[0].category}</span> </div>
							</div>
						</div>
						<div className='col-6 border border-3 py-4 border-grey rounded mb-4 '>
							<div className='d-flex align-items-center mx-4'>
								<div className='fw-bold fs-5'>
								Reservation Date : <span className='fw-normal'>{reservation.dataReservation[0].rentStartDate}</span> 
								</div>
							</div>
						</div>
					</div>
					<div className='row justify-content-around'>
						<div className='col-5 border border-3 py-4 border-grey rounded mb-4'>
							<div className='d-flex align-items-center'>
								<div className='mx-4 '>
									<div className="fw-bolder fs-4">Order details :</div>
									<div className="fs-4">{counter.num} {vehicle?.results[0].category} : Rp. {new Intl.NumberFormat('de-DE').format(total)}</div>
									<div className="fw-bolder fs-4 mt-3">Total : {new Intl.NumberFormat('de-DE').format(total)}</div>
								</div>
							</div>
						</div>
						<div className='col-6 border border-3 py-4 border-grey rounded mb-4'>
							<div className='d-flex align-items-center'>
								<div className='mx-4'>
									<div className="fw-bolder fs-4">Identity :</div>
									<div className="fs-4">{auth.userData[0].fullName ? auth.userData[0].fullName : auth.userData[0].username} {auth.userData[0]?.contact} </div>
								</div>
							</div>
						</div>
					</div>
					<div className='row justify-content-around'>
						<div className='col-3 py-4'>
							<div className='d-flex align-items-center'>
								<div className='fw-bold fs-4'>Payment Code :</div>
							</div>
						</div>
						<div className='col-4 border border-3 py-4 border-grey rounded mb-4'>
							<div className='d-flex position-relative align-items-center mx-3'> 
								<div className='fw-bold fs-4'>#FGADASKE123S</div>
								<div className='button-fourth py-2 position-absolute end-0 px-5 fs-4'>copy</div>
							</div>
						</div>
						<div className='col-4 border border-3 py-4 border-grey rounded mb-4'>
							<div className='d-flex align-items-center mx-3 position-relative'>
								<div className='fs-4'>Select method payment</div>
								<div className='fa-solid fa-chevron-down fs-2 position-absolute end-0'></div>
							</div>
						</div>
					</div>
					<Link to="/history">
						<div className="button-third shadow-yellow py-4 d-flex justify-content-center fw-bolder fs-4">
							<div className="fw-bolder me-3">Finish payment :</div>
							<div className="text-danger fw-bolder">59:30</div>
						</div>
					</Link>
				</div>
			</main>
		</LayoutHome>
	)
}

export default Payment
