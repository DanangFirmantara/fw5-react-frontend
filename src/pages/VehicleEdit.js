/* eslint-disable no-prototype-builtins */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import LayoutLogin from '../components/LayoutLogin'
import {useDispatch, useSelector} from 'react-redux'
import { Navigate, useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'
import {AiFillCamera} from 'react-icons/ai'
import {BiTrash} from 'react-icons/bi'
import LoadingScreen from '../components/LoadingScreen'
import { resetMsg } from '../redux/actions/resetMsg'
import { doUpdateVehicle, getVehicleById } from '../redux/actions/vehicle'

export const VehicleEdit = () => {
	const user = useSelector(state=> state.user)
	const location = useSelector(state=> state.location)
	const category = useSelector(state=> state.category)
	const vehicle = useSelector(state => state.vehicle)
	const auth = useSelector(state=>state.auth)

	const [image, setImage] = useState()
	const [error, setError] = useState('')
	const [changed, setChanged] = useState({})

	const {id} = useParams()

	const dispatch = useDispatch()

	const decreament = (e)=>{
		e.preventDefault()
		console.log()
		if(!changed.hasOwnProperty('stock')){
			if(vehicle.dataDetail.stock > 0){
				console.log(vehicle.dataDetail.stock - 1)
				return setChanged({...changed, stock: vehicle.dataDetail.stock - 1})
			}
		} else{
			if(changed.stock > 0){
				console.log(changed.stock-1)
				return setChanged({...changed, stock : changed.stock - 1})
			}
		}
	}
	const increament = (e)=>{
		e.preventDefault()
		if(!changed.hasOwnProperty('stock')){
			return setChanged({...changed, stock: vehicle.dataDetail.stock + 1})
		} else {
			return setChanged({...changed, stock : changed.stock + 1})
		}
		
	}

	useEffect(()=>{
		dispatch(resetMsg())
		if(vehicle.dataDetail.id !== parseInt(id)){
			dispatch(getVehicleById(id))
		}
	},[dispatch])

	const fileInputHandler = (e)=>{
		e.preventDefault()
		setError('')
		const reader = new FileReader()
		if(e.target.files[0].size > 2097152){
			return setError('Max file 2 mb')
		} else{
			setChanged({...changed, image: e.target.files[0]})
			const image = e.target.files[0]
			reader.readAsDataURL(image)
			reader.onload =(e)=>{
				setImage(e.target.result)
			}
		}
	}

	const onUpdate = (event)=>{
		event.preventDefault()
		const idLocation  = event.target.elements['location'].value
		const idCategory = event.target.elements['category'].value
		const name = event.target.elements['name'].value
		const data = {...changed, idLocation, name}
		if(parseInt(idCategory) !== vehicle.dataDetail.idCategory){
			data['idCategory'] = idCategory
		}
		if(data.image){
			if(data.image.size > 2097152){
				return setError('Max file 2 mb')
			}
		}
		console.log(data)
		dispatch(doUpdateVehicle(vehicle.dataDetail.id, data, auth.token))
	}
	return (
		<LayoutLogin>
			{user.data?.role !== 'Admin' && (
				<Navigate to='/' />
			)}
			{user.isLoading || location.isLoading || category.isLoading || vehicle.isLoading ? (
				<LoadingScreen />
			) : (
				<main className='my-5'>
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
							{vehicle.successMsg !== '' &&
								(
									<div className="alert button-third shadow-dark alert-dismissible fade show text-center fs-5 fw-bold" role="alert">
										{vehicle.successMsg}
										<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={()=> dispatch(resetMsg())}></button>
									</div>
								)
							}
							{vehicle.errorMsg !== '' &&
								(
									<div className="alert button-third shadow-dark alert-dismissible fade show text-center fs-5 fw-bold" role="alert">
										{vehicle.errorMsg}
										<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={()=> dispatch(resetMsg())}></button>
									</div>
								)
							}
						</div>
						<div className='d-flex align-items-center mb-4'>
							<Link className="fa-solid fa-chevron-left icon dark fs-0 me-5" to='/'></Link>
							<div className="fs-1 fw-bold text-dark">Edit vehicles</div>
						</div>
						<form id="create" onSubmit={onUpdate}>
							<div className="row mb-5">
								<div className="col-7 g-0">
									<div className="pe-5">
										<div className="mb-5 position-relative d-flex ">
											{image ? (
												<img className='img-banner-5 rounded' src={image}/>
											) : 
												vehicle.dataDetail?.image ? (
													<img className='img-banner-5 rounded' src={vehicle.dataDetail.image}/>
												) : (
													<AiFillCamera className='img-banner-5 rounded bg-grey text-third'/>
												)
											}
											<div className='position-absolute end-0'>
												<button className="icon-circle-3 rounded-circle button-fourth justify-content-center d-flex align-items-center position-relative">
													{image ? (
														<button 
															onClick={()=> {
																setImage()
																delete changed.image
															}} 
															className='bg-transparent border-0'>
															<BiTrash />
														</button>
													) : (
														<>
															<i className="fa-solid fa-pencil"/>
															<input type='file' name='image' className='position-absolute input-img opacity-0' onChange={(e)=> fileInputHandler(e)}/>
														</>
													)}
												</button>
											</div>
										</div>
										<div className="d-flex justify-content-around align-items-center">
											<AiFillCamera className='img-thumbnail rounded bg-grey'/>
											<AiFillCamera className='img-thumbnail rounded bg-grey'/>
										</div>
									</div>
								</div>
								<div className="col">
									<input className='w-100 pb-2 border-0 border-bottom border-3 border-dark fs-4 fw-light mb-4' placeholder='Name (max up to 50 words) ' type='text' name='name' defaultValue={vehicle.dataDetail?.name} onChange={(event) =>setChanged({...changed, name:event.target.value})}/>
									<div className='w-100 pb-2 border-0 border-bottom border-3 border-dark  mb-4 position-relative d-flex align-items-center' placeholder='Location' type='text' name='location'>
										<select className='w-100 border-0 fs-4 fw-light text-muted form-select py-0 px-0' type='text' placeholder='Select location' name='location'>
											<option style={{display : 'none'}} className='py-2' value='' selected={vehicle.dataDetail?.idLocation}>Select location</option>
											{location.data.length > 0 && location.data.map((obj)=>{
												return (
													<option key={obj.name} selected={vehicle.dataDetail?.idLocation === obj.id} className='border border-2 text-dark' value={obj.id}>{obj.name}</option>
												)
											})}
										</select>
										<div className='fa-solid fa-chevron-down position-absolute fs-2 end-0 mx-2 custom-select'></div>
									</div>
									<input className='w-100 pb-2 border-0 border-bottom border-3 border-dark fs-4 fw-light mb-4' placeholder='Description (max up to 150 words)' type='text' name='description' defaultValue={vehicle.dataDetail?.description} onChange={(event)=>setChanged({...changed,description: event.target.value})}/>
									<div className='pd-heading fs-4 mb-3'>Price :</div>
									<input className='w-100 py-4 px-3 border-0 bg-grey rounded fs-4 fw-light mb-4' type='text' placeholder='Type the price' name='price' defaultValue={vehicle.dataDetail?.price} onChange={(event)=>setChanged({...changed, price: event.target.value})}/>
									<div className='pd-heading fs-4 mb-3'>Status :</div>
									<div className='d-flex position-relative align-items-center mb-5'>
										<div className='w-100 py-4 px-3 border-0 bg-grey rounded fs-4 fw-light'>
											<div className={changed.hasOwnProperty('stock') ? changed.stock != 0 ? 'text-success' : 'text-danger' : vehicle.dataDetail?.status === 'Available' ? 'text-success' : 'text-danger'}>
												{changed.hasOwnProperty('stock') ? changed.stock != 0 ? 'Available' : 'Full booked' : vehicle.dataDetail?.status}
											</div>
										</div>
									</div>
									<div className="d-flex justify-content-between">
										<button className="icon-plus button-dark rounded bg-yellow fw-bolder fs-1" onClick={(e)=>decreament(e)}>-</button>
										<div name='stock' className="fw-bolder fs-0">
											{changed.hasOwnProperty('stock') ? changed.stock : vehicle.dataDetail?.stock}
										</div>
										<button className="icon-plus rounded bg-yellow fw-bolder fs-1" onClick={(e)=>increament(e)}>+</button>
									</div>
							
								</div>
							</div>
							<div className="d-flex justify-content-between row">
								<div className="col-5">
									<div className='d-flex position-relative align-items-center'>
										<select className="button-height button-dark w-100 fw-bolder fs-4 shadow-dark form-select text-center" name='category'>
											<option style={{display : 'none'}} className='py-2' value=''>Select category</option>
											{category.data.length > 0 && category.data.map((obj)=>{
												return (
													<option key={obj.name} className='border border-2' selected={vehicle.dataDetail?.idCategory === obj.id} value={obj.id}>{obj.name}</option>
												)
											})}
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
			)}
			
		</LayoutLogin>
	)
}

export default VehicleEdit

