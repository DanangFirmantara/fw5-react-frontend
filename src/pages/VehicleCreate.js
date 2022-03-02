/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import LayoutLogin from '../components/LayoutLogin'
import defaultImage from '../assets/image/defaultImage.png'
import {Link} from 'react-router-dom'

export const VehicleCreate = () => {
	let [image, setImage] = useState([null])
	let [count,setCount] = useState(0)

	useEffect(()=>{
		console.log(image)
	},[])

	const decreament = ()=>{
		if(count > 0){
			setCount(count - 1)
		}
	}
	const increament = ()=>{
		setCount (count + 1)
	}
	const onCreate= async(event)=>{
		try{
			event.preventDefault()
			const name = event.target.elements['name'].value
			const location  = event.target.elements['location'].value
			const description = event.target.elements['description'].value
			const price = event.target.elements['price'].value
			const status = event.target.elements['status'].value
			const category = event.target.elements['category'].value
			const image = event.target.elements['image'].value
			const stock = count
			const data = [name, location, description, price, status, category, stock, image]
		} catch (err){
			console.log(err)
		}
	}
	return (
		<LayoutLogin>
			<main>
				<div className="container">
					<div className='d-flex align-items-center mb-4'>
						<Link className="fa-solid fa-chevron-left icon dark fs-0 me-5" to='/'></Link>
						<div className="fs-1 fw-bold text-dark">Add new item</div>
					</div>
					<form id="create" onSubmit={onCreate}>
						<div className="row mb-5">
							<div className="col-7 g-0">
								<div className="pe-5">
									<div className="mb-5">
										<input type='file' name='image' className='form-control'></input>
										<img className='img-banner-5 rounded' src={defaultImage}></img>
									</div>
									<div className="d-flex justify-content-around align-items-center">
										<img className='img-thumbnail rounded' src={defaultImage}></img>
										<img className='img-thumbnail rounded' src={defaultImage}></img>
									</div>
								</div>
							</div>
							<div className="col">
								<input className='w-100 pb-2 border-0 border-bottom border-3 border-dark fs-4 fw-light mb-4' placeholder='Name (max up to 50 words) ' type='text' name='name'/>
								<input className='w-100 pb-2 border-0 border-bottom border-3 border-dark fs-4 fw-light mb-4' placeholder='Location' type='text' name='location'/>
								<input className='w-100 pb-2 border-0 border-bottom border-3 border-dark fs-4 fw-light mb-4' placeholder='Description (max up to 150 words)' type='text' name='description'/>
								<div className='pd-heading fs-4 mb-3'>Price :</div>
								<input className='w-100 py-4 px-3 border-0 bg-grey rounded fs-4 fw-light mb-4' type='text' placeholder='Type the price' name='price'/>
								<div className='pd-heading fs-4 mb-3'>Status :</div>
								<div className='d-flex position-relative align-items-center mb-5'>
									<select className='w-100 py-4 px-3 border-0 bg-grey rounded fs-4 fw-light form-select' type='text' placeholder='Type the price' name='status'>
										<option style={{display : 'none'}} className='py-2' value=''>Select status</option>
										<option className='border border-2 text-dark' value='Available'>Available</option>
										<option className='border border-2 text-danger' value='Full booked'>Full booked</option>
									</select>
									<div className='fa-solid fa-chevron-down position-absolute fs-2 end-0 mx-4 custom-select'></div>
								</div>
								<div className="d-flex justify-content-between">
									<button className="icon-plus button-dark rounded bg-yellow fw-bolder fs-1" onClick={decreament}>-</button>
									<div name='stock' className="fw-bolder fs-0">
										{count}
									</div>
									
									<button className="icon-plus rounded bg-yellow fw-bolder fs-1" onClick={increament}>+</button>
								</div>
							
							</div>
						</div>
						<div className="d-flex justify-content-between row">
							<div className="col-5">
								<div className='d-flex position-relative align-items-center'>
									<select className="button-height button-dark w-100 fw-bolder fs-4 shadow-dark form-select text-center" name='category'>
										<option style={{display : 'none'}} className='py-2' value=''>Add item to</option>
										<option className='border border-2' value='car'>Car</option>
										<option className='border border-2' value='motorbike'>Motorbike</option>
										<option className='border border-2' value='bike'>Bike</option>
									</select>
									<div className='fa-solid fa-chevron-down position-absolute fs-2 end-0 me-5 custom-select yellow'></div>
								</div>
							</div>
							<div className="col">
								
								<button className="button-height button-yellow w-100 fw-bolder fs-4 shadow-yellow" type='submit'>
                        Save item
								</button>
							
							</div>
						</div>
					</form>
				</div>
			</main>
		</LayoutLogin>
	)
}

export default VehicleCreate