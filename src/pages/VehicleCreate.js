import React from 'react'
import LayoutLogin from '../components/LayoutLogin'
import defaultImage from '../assets/image/defaultImage.png'

export const VehicleCreate = () => {
	return (
		<LayoutLogin>
			<main>
				<div className="container">
					<a className="d-flex align-items-center mb-5" href="./vehicle-type.html">
						<i className="fa-solid fa-chevron-left icon dark fs-0 me-3"></i>
						<div className="fs-1 fw-bold text-dark">Add new item</div>
					</a>
					<form id="create">
						<div className="row mb-5">
							<div className="col-7 g-0">
								<div className="pe-5">
									<div className="mb-5">
										<img className='img-banner-5 rounded' src={defaultImage}></img>
									</div>
									<div className="d-flex justify-content-around align-items-center">
										<img className='img-thumbnail rounded' src={defaultImage}></img>
										<img className='img-thumbnail rounded' src={defaultImage}></img>
									</div>
								</div>
							</div>
							<div className="col">
								<input className='w-100 pb-2 border-0 border-bottom border-3 border-dark fs-4 fw-light mb-4' placeholder='Name (max up to 50 words) ' type='text'/>
								<input className='w-100 pb-2 border-0 border-bottom border-3 border-dark fs-4 fw-light mb-4' placeholder='Location' type='text'/>
								<input className='w-100 pb-2 border-0 border-bottom border-3 border-dark fs-4 fw-light mb-4' placeholder='Description (max up to 150 words)' type='text'/>
								<div className='pd-heading fs-4 mb-3'>Price :</div>
								<input className='w-100 py-4 px-3 border-0 bg-grey rounded fs-4 fw-light mb-4' type='text' placeholder='Type the price'/>
								<div className='pd-heading fs-4 mb-3'>Status :</div>
								<select className='w-100 py-4 px-3 border-0 bg-grey rounded fs-4 fw-light mb-4' type='text' placeholder='Type the price'>
									<option style={{display : 'none'}} className='py-2'>Select status</option>
									<option className='border border-2 text-dark'>Available</option>
									<option className='border border-2 text-danger'>Full booked</option>
								</select>
								<div className="d-flex justify-content-between">
									<button className="icon-plus button-dark rounded bg-yellow fw-bolder fs-1">-</button>
									<div className="fw-bolder fs-0">2</div>
									<button className="icon-plus rounded bg-yellow fw-bolder fs-1">+</button>
								</div>
							
							</div>
						</div>
						<div className="d-flex justify-content-between row">
							<div className="col-5">
								<button className="button-height button-dark w-100 fw-bolder fs-4 shadow-dark">
                        Add item to
								</button>
							</div>
							<div className="col">
								<a href="/reservation.html">
									<button className="button-height button-yellow w-100 fw-bolder fs-4 shadow-yellow">
                        Save item
									</button>
								</a>
							</div>
						</div>
					</form>
				</div>
			</main>
		</LayoutLogin>
	)
}

export default VehicleCreate