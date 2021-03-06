import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link, Navigate } from 'react-router-dom'
import defaultImage from '../assets/image/image 6.png'
import { useDispatch, useSelector } from 'react-redux'
import LayoutHome from '../components/LayoutHome'
import { getVehicleById } from '../redux/actions/vehicle'
import LoadingScreen from '../components/LoadingScreen'
import { decQuantity, incQuantity } from '../redux/actions/reservation'

export const VehicleDetail = () => {
	const [error, setError ] = useState('')

	const auth = useSelector(state=>state.auth)
	const reservation = useSelector(state => state.reservation )
	let vehicle = useSelector(state=>state.vehicle)
	const {id} = useParams()
	const navigate = useNavigate()

	const dispatch = useDispatch()

	useEffect(()=>{
		if(vehicle.dataDetail.id !== parseInt(id)){
			dispatch(getVehicleById(id))
		}
	},[dispatch])

	const goToReservation = (id)=>{
		console.log(id)
		console.log(vehicle.dataDetail.status)
		if(vehicle.dataDetail.status === 'Available'){
			navigate(`/reservation?id=${id}`)
		} else{
			setError('Vehicle full booked')
		}
	}

	const onIncreament = ()=>{
		if(reservation.quantity < vehicle.dataDetail.stock ){
			dispatch( incQuantity() )
		}
	}

	const onDecreament = ()=>{
		if(reservation.quantity > 0){
			dispatch( decQuantity() )
		}
	}
	return (
		<LayoutHome>
			{!auth.token && <Navigate to='/login' />}
			{vehicle.isLoading ? (
				<LoadingScreen /> 
			) : (
				<main>
					<div className="container">
						<div className='my-4'>
							{error !== '' &&
								(
									<div className="alert button-third shadow-dark alert-dismissible fade show text-center fs-5 fw-bold" role="alert">
										{error}
										<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={()=> setError('')}></button>
									</div>
								)
							}
						</div>
						<Link className="d-flex align-items-center my-md-5 my-4" to="../vehiclesType">
							<i className="fa-solid fa-chevron-left icon dark fs-0 me-3"></i>
							<div className="fs-1 fw-bold text-dark">Detail</div>
						</Link>
						<div className="row mb-5 row-cols-1 row-cols-lg-2">
							<div className="g-0 col">
								<div className="pe-lg-5 px-5 px-lg-0">
									<div className="mb-5 text-center">
										<img src={vehicle.dataDetail?.image || defaultImage} alt={vehicle.dataDetail?.name} className='img-banner-5 rounded d-none d-lg-flex'></img>
									</div>
									<div className="mb-5 text-center">
										<img src={vehicle.dataDetail?.image || defaultImage} alt={vehicle.dataDetail?.name} className='img-fluid  d-lg-none rounded'></img>
									</div>
									<div className="d-flex justify-content-between align-items-center">
										<i className="fa-solid fa-chevron-left icon dark"></i>
										<img src={vehicle.dataDetail?.image || defaultImage} alt={vehicle.dataDetail?.name} className='img-slide rounded '></img>
										<img src={vehicle.dataDetail?.image || defaultImage} alt={vehicle.dataDetail?.name} className='img-slide rounded '></img>
										<i className="fa-solid fa-chevron-right icon dark"></i>
									</div>
								</div>
							</div>
							<div className="col">
								<h1 className="pd-bolder mb-3">{vehicle.dataDetail.name}</h1>
								<h3 className="pd-bolder fw-normal fs-2 mb-3">{vehicle.dataDetail?.location}</h3>
								<div className={vehicle.dataDetail?.status === 'Available' ? 'fs-4 green fw-bold' : 'fs-4 text-danger fw-bold'}>{vehicle.dataDetail?.status}</div>
								<div className="fs-4 text-danger fw-light mb-3">No prepayment</div>
								<ul className="lh-base fs-4 fw-light mb-4">
									<li>Capacity : {vehicle.dataDetail?.stock}</li>
									<li>Type : {vehicle.dataDetail?.category}</li>
									<li>{vehicle.dataDetail?.description}</li>
								</ul>
								<div className="pd-bolder fs-1 d-flex justify-content-center pt-2 mb-6">
								Rp. {new Intl.NumberFormat('de-DE').format(vehicle.dataDetail?.price)}/day
								</div>
								<div className="d-flex justify-content-between">
									<button className="icon-plus button-third rounded bg-yellow fw-bolder fs-1" onClick={onDecreament}>-</button>
									<div className="fw-bolder fs-0">{reservation.quantity}</div>
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
								<button className="button-height w-100 fw-bolder fs-4 shadow-yellow button-fourth" onClick={()=>goToReservation(vehicle.dataDetail?.id)}>
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
			)}
			
		</LayoutHome>
	)
}

export default VehicleDetail
