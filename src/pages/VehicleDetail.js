/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState,useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import LayoutLogin from '../components/LayoutLogin'
import {getData} from '../helpers/http'
import defaultImage from '../assets/image/defaultImage.png'

export const VehicleDetail = (props) => {
	const [vehicle,setVehicle] = useState([])
	const {id} = useParams()
	let [count, setCount] = useState(1)
	
	const navigate = useNavigate()

	useEffect(()=>{
		getDataComponent(id)
		console.log(count,'count')
	},[])

	const getDataComponent = async(id)=>{
		try{
			// const {data} = await getData(`https://rickandmortyapi.com/api/character/${id}`, props.history)
			const {data} = await getData(`http://localhost:5000/vehicles?id=${id}`, props.history)
			console.log(data.results)
			setVehicle(data.results[0])
		} catch(err){
			console.log(err)
		}
	}

	const increament = ()=>{
		setCount(count+1)
	}

	const decreament = ()=>{
		if(count>1){
			setCount(count-1)
		}
	}

	const goToReservation = (id)=>{
		navigate(`/reservation?id=${id}`)
	}
	return (
		<LayoutLogin>
			<main>
				<div className="container">
					<Link className="d-flex align-items-center my-md-5 my-4" to="../vehiclesType">
						<i className="fa-solid fa-chevron-left icon dark fs-0 me-3"></i>
						<div className="fs-1 fw-bold text-dark">Detail</div>
					</Link>
					<div className="row mb-5">
						<div className="col-7 g-0">
							<div className="pe-5">
								<div className="mb-5 text-center">
									<img src={vehicle?.image || defaultImage} alt={vehicle?.name} className='img-banner-5 rounded'></img>
								</div>
								<div className="d-flex justify-content-between align-items-center">
									<i className="fa-solid fa-chevron-left icon dark"></i>
									{/* <div className="img-slide img-12 rounded"></div>
									<div className="img-slide img-12 rounded"></div> */}
									<img src={vehicle?.image || defaultImage} alt={vehicle?.name} className='img-slide rounded '></img>
									<img src={vehicle?.image || defaultImage} alt={vehicle?.name} className='img-slide rounded '></img>
									<i className="fa-solid fa-chevron-right icon dark"></i>
								</div>
							</div>
						</div>
						<div className="col">
							<h1 className="pd-bolder mb-3">{vehicle?.name}</h1>
							<h3 className="pd-bolder fw-normal fs-2 mb-3">{vehicle?.location}</h3>
							<div className="fs-4 green fw-bold">{vehicle?.status}</div>
							<div className="fs-4 text-danger fw-light mb-3">No prepayment</div>
							<ul className="lh-base fs-4 fw-light mb-4">
								<li>Capacity : {vehicle?.stock}</li>
								<li>Type : {vehicle?.category}</li>
								<li>{vehicle.description}</li>
							</ul>
							<div className="pd-bolder fs-1 d-flex justify-content-center pt-2 mb-6">
								Rp. {new Intl.NumberFormat('de-DE').format(vehicle.price)}/day
							</div>
							<div className="d-flex justify-content-between">
								<button className="icon-plus button-third rounded bg-yellow fw-bolder fs-1" onClick={decreament}>-</button>
								<div className="fw-bolder fs-0">{count}</div>
								<button className="icon-plus rounded fw-bolder fs-1 bg-fiveth" onClick={increament}>+</button>
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
							<button className="button-height w-100 fw-bolder fs-4 shadow-yellow button-fourth" onClick={()=>goToReservation(vehicle.id)}>
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
		</LayoutLogin>
	)
}

export default VehicleDetail