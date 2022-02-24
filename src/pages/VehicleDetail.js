/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState,useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import LayoutLogin from '../components/LayoutLogin'
import {getData} from '../helpers/http'

export const VehicleDetail = (props) => {
	const [vehicle,setVehicle] = useState({})
	const {id} = useParams()

	useEffect(()=>{
		getDataComponent(id)
	},[])
	const getDataComponent = async(id)=>{
		try{
			const {data} = await getData(`https://rickandmortyapi.com/api/character/${id}`, props.history)
			console.log(data)
			setVehicle(data)
		} catch(err){
			console.log(err)
		}
	}
	return (
		<LayoutLogin>
			<main>
				<div className="container">
					<Link className="d-flex align-items-center mb-5" to="../vehiclesType">
						<i className="fa-solid fa-chevron-left icon dark fs-0 me-3"></i>
						<div className="fs-1 fw-bold text-dark">Detail</div>
					</Link>
					<div className="row mb-5">
						<div className="col-7 g-0">
							<div className="pe-5">
								<div className="mb-5 text-center">
									{/* <div className="img-banner img-12 rounded"></div> */}
									<img src={vehicle?.image} alt='VehicleImage' className='img-fluid rounded'></img>
								</div>
								<div className="d-flex justify-content-between align-items-center">
									<i className="fa-solid fa-chevron-left icon dark"></i>
									{/* <div className="img-slide img-12 rounded"></div>
									<div className="img-slide img-12 rounded"></div> */}
									<img src={vehicle?.image} alt='VehicleImage' className='img-slide rounded '></img>
									<img src={vehicle?.image} alt='VehicleImage' className='img-slide rounded '></img>
									<i className="fa-solid fa-chevron-right icon dark"></i>
								</div>
							</div>
						</div>
						<div className="col">
							<h1 className="pd-bolder mb-3">{vehicle?.name}</h1>
							<h3 className="pd-bolder fw-normal fs-2 mb-3">{vehicle?.gender}</h3>
							<div className="fs-4 green fw-bold">{vehicle?.status}</div>
							<div className="fs-4 text-danger fw-light mb-3">{vehicle?.species}</div>
							<ul className="lh-base fs-4 fw-light mb-4">
								<li>Capacity : {vehicle?.id}</li>
								<li>Type : {vehicle?.type}</li>
								<li>Total episode :</li>

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
							<Link to="../reservation">
								<button className="button-height button-yellow w-100 fw-bolder fs-4 shadow-yellow">
									Reservation
								</button>
							</Link>
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

export default VehicleDetail