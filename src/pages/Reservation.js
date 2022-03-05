import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import LayoutHome from '../components/LayoutHome'
import { reservation } from '../redux/actions/reservation'

export const Reservation = () => {
	const {vehicle, counter} = useSelector(state=>state)
	const [vehiclesServe, setVehicleServe] = useState({})
	const total = counter.num * vehiclesServe.price
	const navigate = useNavigate()

	const dispatch = useDispatch()
	useEffect(() => {
		setVehicleServe(vehicle.results[0])
	}, [])

	const onReservation = (event)=>{
		event.preventDefault()
		const rentStartDate = event.target.elements['rentStartDate'].value
		const rentEndDate = event.target.elements['rentEndDate'].value
		const data = {rentEndDate, rentStartDate}
		dispatch(reservation(data))
		navigate('/payment')
	}
	
	const goBack = () =>{
		window.history.back()
	}

	return (
		
		<LayoutHome >
			<form onSubmit={onReservation}>
				<div className="container my-5">
					<div className="d-flex align-items-center mb-5">
						<button className="fa-solid fa-chevron-left icon dark fs-0 me-3" onClick={goBack}></button>
						<div className="fs-1 fw-bold text-dark">Reservation</div>
					</div>
					<div className="row mb-5">
						<div className="col-7">
							<div className="pe-5">
								<div className="img-banner img-12 rounded"></div>
							</div>
						</div>
						<div className="col move-1">
							<div className="pd-bolder">{vehiclesServe.name}</div>
							<div className="pd-bolder fs-1 fw-light mb-3">{vehiclesServe.location}</div>
							<div
								className="w-100 border border-3 border-grey rounded p-3 lh-base shadow mb-4"
							>
								<div className="px-4">
									<div className="fs-4">Qt : {counter.num} {vehiclesServe.category}</div>
									<div className="fs-4 text-muted fw-bold">No Prepayment</div>
								</div>
							</div>
							<div
								className="w-100 border border-3 border-grey rounded p-3 lh-base shadow"
							>
								<div className="px-4">
									<div className="fw-bold fs-4">Details:</div>
									<div className="fs-4">{counter.num} {vehiclesServe.category} : Rp. {new Intl.NumberFormat('de-DE').format(total)}</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row justify-content-between align-items-center mb-5">
						<div className="col">
							<div className="fs-1 fw-bold">Reservation :</div>
						</div>
						<div className="col-4">
							<input className="border border-5 w-100 rounded border-grey fs-4 text-center shadow p-4 fw-bold text-muted" placeholder='Start Date' type='date' name='rentStartDate'/>
						</div>
						<div className="col-4">
							<input className="border border-5 w-100 rounded border-grey fs-4 text-center shadow p-4 fw-bold text-muted" placeholder='Return Date' type='date' name='rentEndDate'/>
						</div>
					</div>
					<div className="border border-5 w-100 p-4 text-center rounded border-grey pd-heading shadow mb-4">
					Total : Rp. {new Intl.NumberFormat('de-DE').format(total)}
					</div>
					<button className="button-third text-center w-100 shadow-yellow p-4 fw-bolder fs-4 mb-4 " type='submit'>
						Go To Payment
					</button>
				</div>
			</form>
		</LayoutHome>
			
		
	)
}

export default Reservation