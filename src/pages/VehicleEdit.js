import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import LayoutLogin from '../components/LayoutLogin'
import { getVehicleById } from '../redux/actions/vehicle'

export const vehicleEdit = () => {
	const dispatch = useDispatch()
	const {id} = useParams()

	const vehicle = useSelector(state=> state.vehicle)

	useEffect(()=>{
		if(vehicle.dataDetail.id !== parseInt(id)){
			dispatch(getVehicleById(id))
		}
	},[dispatch])

	return (
		<LayoutLogin>
			<main>
				<div className="container">
					<a className="d-flex align-items-center mb-5" href="./vehicle-type.html">
						<i className="fa-solid fa-chevron-left icon dark fs-0 me-3"></i>
						<div className="fs-1 fw-bold text-dark">Detail</div>
					</a>
					<div className="row mb-5">
						<div className="col-7 g-0">
							<div className="pe-5">
								<div className="mb-5">
									<div className="img-banner img-12 rounded"></div>
								</div>
								<div className="d-flex justify-content-between align-items-center">
									<i className="fa-solid fa-chevron-left icon dark"></i>
									<div className="img-slide img-12 rounded"></div>
									<div className="img-slide img-12 rounded"></div>
									<i className="fa-solid fa-chevron-right icon dark"></i>
								</div>
							</div>
						</div>
						<div className="col">
							<h1 className="pd-bolder mb-3">{vehicle.dataDetail?.name}</h1>
							<h3 className="pd-bolder fw-normal fs-2 mb-3">Yogyakarta</h3>
							<div className="fs-4 green fw-bold">Available</div>
							<div className="fs-4 text-danger fw-light mb-3">No prepayment</div>
							<ul className="lh-base fs-4 fw-light mb-4">
								<li>Capacity : 1 Person</li>
								<li>Type : Bike</li>
								<li>Reservation before 2 PM</li>
							</ul>
							<div className="pd-bolder fs-1 d-flex justify-content-center pt-2 mb-6">
              Rp. 78.000/day
							</div>
							<div className="d-flex justify-content-between">
								<button className="icon-plus rounded bg-yellow">+</button>
								<div className="fw-bolder fs-0">2</div>
								<button className="icon-plus rounded bg-yellow">+</button>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-between row">
						<div className="col-5">
							<button className="button-height button-dark w-100 fw-bolder fs-4 shadow-dark">
              Chat Admin
							</button>
						</div>
						<div className="col-4">
							<a href="/reservation.html">
								<button className="button-height button-yellow w-100 fw-bolder fs-4 shadow-yellow">
                Reservation
								</button>
							</a>
						</div>
						<div className="col-3">
							<button className="button-height button-dark w-100 fw-bolder fs-4 shadow-dark">
								<div className="d-flex align-items-center justify-content-center"><i className="fa-solid fa-heart me-4 fs-0"></i>Like</div>
							</button>
						</div>
					</div>
				</div>
			</main>
		</LayoutLogin>
	)
}

export default vehicleEdit
