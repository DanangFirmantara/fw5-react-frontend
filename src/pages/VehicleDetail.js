/* eslint-disable react/prop-types */

import React, { useEffect } from 'react'
import { useParams, useNavigate, Link, Navigate } from 'react-router-dom'
import defaultImage from '../assets/image/image 6.png'
import { useDispatch, useSelector } from 'react-redux'
import LayoutHome from '../components/LayoutHome'
import {increament, decreament} from '../redux/actions/counter'
import { getVehicleById } from '../redux/actions/vehicle'

export const VehicleDetail = () => {
	const auth = useSelector(state=>state.auth)
	const counter = useSelector(state=>state.counter)
	let vehicle = useSelector(state=>state.vehicle)
	const {id} = useParams()
	const navigate = useNavigate()

	const dispatch = useDispatch()

	useEffect(async()=>{
		dispatch(getVehicleById(id))
	},[])

	const goToReservation = (id)=>{
		navigate(`/reservation?id=${id}`)
	}

	const onIncreament = ()=>{
		dispatch(increament())
	}

	const onDecreament = ()=>{
		dispatch(decreament())
	}
	return (
		<LayoutHome>
			{!auth.token && <Navigate to='/login' />}
			<main>
				<div className="container">
					<Link className="d-flex align-items-center my-md-5 my-4" to="../vehiclesType">
						<i className="fa-solid fa-chevron-left icon dark fs-0 me-3"></i>
						<div className="fs-1 fw-bold text-dark">Detail</div>
					</Link>
					<div className="row mb-5 row-cols-1 row-cols-lg-2">
						<div className="g-0 col">
							<div className="pe-lg-5 px-5 px-lg-0">
								<div className="mb-5 text-center">
									<img src={vehicle.results[0]?.image || defaultImage} alt={vehicle.results[0].name} className='img-banner-5 rounded d-none d-lg-flex'></img>
								</div>
								<div className="mb-5 text-center">
									<img src={vehicle.results[0]?.image || defaultImage} alt={vehicle.results[0].name} className='img-fluid  d-lg-none rounded'></img>
								</div>
								<div className="d-flex justify-content-between align-items-center">
									<i className="fa-solid fa-chevron-left icon dark"></i>
									{/* <div className="img-slide img-12 rounded"></div>
									<div className="img-slide img-12 rounded"></div> */}
									<img src={vehicle.results[0]?.image || defaultImage} alt={vehicle.results[0].name} className='img-slide rounded '></img>
									<img src={vehicle.results[0]?.image || defaultImage} alt={vehicle.results[0].name} className='img-slide rounded '></img>
									<i className="fa-solid fa-chevron-right icon dark"></i>
								</div>
							</div>
						</div>
						<div className="col">
							<h1 className="pd-bolder mb-3">{vehicle.results[0].name}</h1>
							<h3 className="pd-bolder fw-normal fs-2 mb-3">{vehicle.results[0].location}</h3>
							<div className="fs-4 green fw-bold">{vehicle.results[0].status}</div>
							<div className="fs-4 text-danger fw-light mb-3">No prepayment</div>
							<ul className="lh-base fs-4 fw-light mb-4">
								<li>Capacity : {vehicle.results[0].stock}</li>
								<li>Type : {vehicle.results[0].category}</li>
								<li>{vehicle.results[0].description}</li>
							</ul>
							<div className="pd-bolder fs-1 d-flex justify-content-center pt-2 mb-6">
								Rp. {new Intl.NumberFormat('de-DE').format(vehicle.results[0].price)}/day
							</div>
							<div className="d-flex justify-content-between">
								<button className="icon-plus button-third rounded bg-yellow fw-bolder fs-1" onClick={onDecreament}>-</button>
								<div className="fw-bolder fs-0">{counter.num}</div>
								<button className="icon-plus rounded fw-bolder fs-1 button-fourth" onClick={onIncreament}>+</button>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-between row mb-md-5">
						<div className="col-5">
							<button className="button-height button-third w-100 fw-bolder fs-4 shadow-dark">
								Chat Admin
							</button>
						</div>
						<div className="col-4">
							<button className="button-height w-100 fw-bolder fs-4 shadow-yellow button-fourth" onClick={()=>goToReservation(vehicle.results[0].id)}>
									Reservation
							</button>
						</div>
						<div className="col-3">
							<button className="button-height button-third w-100 fw-bolder fs-4 shadow-dark">
								<div className="d-flex align-items-center justify-content-center"><i className="fa-solid fa-heart me-4 fs-0"></i>Like</div>
							</button>
						</div>
					</div>
				</div>
			</main>
		</LayoutHome>
	)
}

export default VehicleDetail