/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import LayoutLogin from '../components/LayoutLogin'
import {useDispatch, useSelector} from 'react-redux'
import { Navigate } from 'react-router-dom'
import {Link} from 'react-router-dom'
import {AiFillCamera} from 'react-icons/ai'
import {BiTrash} from 'react-icons/bi'
import LoadingScreen from '../components/LoadingScreen'
import { resetMsg } from '../redux/actions/resetMsg'
import { addVehicle, resetVehicleDetail } from '../redux/actions/vehicle'

export const VehicleCreate = () => {
	const user = useSelector(state=> state.user)
	const location = useSelector(state=> state.location)
	const category = useSelector(state=> state.category)
	const vehicle = useSelector(state => state.vehicle)
	const auth = useSelector(state=>state.auth)

	const [dataSave, setDataSave] = useState({stock:0})
	const [image, setImage] = useState()
	const [error, setError] = useState('')

	const dispatch = useDispatch()

	const decreament = (e)=>{
		e.preventDefault()
		if(dataSave.stock > 0){
			setDataSave({...dataSave, stock: dataSave.stock-1})
		}
	}
	const increament = (e)=>{
		e.preventDefault()
		setDataSave ({...dataSave, stock: dataSave.stock+1})
	}

	useEffect(()=>{
		dispatch(resetVehicleDetail())
		dispatch(resetMsg())
	},[])

	const fileInputHandler = (e)=>{
		e.preventDefault()
		const reader = new FileReader()
		setDataSave({...dataSave, image: e.target.files[0]})
		const image = e.target.files[0]
		reader.readAsDataURL(image)
		reader.onload =(e)=>{
			setImage(e.target.result)
		}
	}

	const onCreate = (event)=>{
		event.preventDefault()
		setError('')
		const name = event.target.elements['name'].value
		const idLocation  = event.target.elements['location'].value
		const description = event.target.elements['description'].value
		const price = event.target.elements['price'].value
		const idCategory = event.target.elements['category'].value
		const data = {...dataSave,name, idLocation, description, price, idCategory}
		let n = 7
		Object.keys(data).forEach((item)=>{
			if(data[item] === ''){
				if(item === 'idCategory'){
					return setError('Select category')
				}
				if( item === 'idLocation'){
					return setError('Select location')
				}
				return setError(`Please fill ${item}`)
			} else {
				n--
			}
		})
		if(n <= 0){
			console.log(data)
			dispatch(addVehicle(data, auth.token))
		} else{
			return setError('Please Add image')
		}
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
							<div className="fs-1 fw-bold text-dark">Add new item</div>
						</div>
						<form id="create" onSubmit={onCreate}>
							<div className="row mb-5">
								<div className="col-7 g-0">
									<div className="pe-5">
										<div className="mb-5 position-relative d-flex ">
											{image ? (
												<img className='img-banner-5 rounded' src={image}/>
											) : (
												<AiFillCamera className='img-banner-5 rounded bg-grey text-third'/>
											)}
											<div className='position-absolute end-0'>
												<button className="icon-circle-3 rounded-circle button-fourth justify-content-center d-flex align-items-center position-relative">
													{image ? (
														<button 
															onClick={()=> {
																setImage()
																delete dataSave.image
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
									<input className='w-100 pb-2 border-0 border-bottom border-3 border-dark fs-4 fw-light mb-4' placeholder='Name (max up to 50 words) ' type='text' name='name' defaultValue={vehicle.dataDetail?.name}/>
									<div className='w-100 pb-2 border-0 border-bottom border-3 border-dark  mb-4 position-relative d-flex align-items-center' placeholder='Location' type='text' name='location'>
										<select className='w-100 border-0 fs-4 fw-light text-muted form-select py-0 px-0' type='text' placeholder='Select location' name='location'>
											<option style={{display : 'none'}} className='py-2' value='' selected={vehicle.dataDetail?.idLocation}>Select location</option>
											{location.data.length > 0 && location.data.map((obj)=>{
												return (
													<option key={obj.name} className='border border-2 text-dark' value={obj.id}>{obj.name}</option>
												)
											})}
										</select>
										<div className='fa-solid fa-chevron-down position-absolute fs-2 end-0 mx-2 custom-select'></div>
									</div>
									<input className='w-100 pb-2 border-0 border-bottom border-3 border-dark fs-4 fw-light mb-4' placeholder='Description (max up to 150 words)' type='text' name='description' defaultValue={vehicle.dataDetail?.description}/>
									<div className='pd-heading fs-4 mb-3' defaultValue={vehicle.dataDetail?.price}>Price :</div>
									<input className='w-100 py-4 px-3 border-0 bg-grey rounded fs-4 fw-light mb-4' type='text' placeholder='Type the price' name='price' defaultValue={vehicle.dataDetail?.price}/>
									<div className='pd-heading fs-4 mb-3'>Status :</div>
									<div className='d-flex position-relative align-items-center mb-5'>
										<div className='w-100 py-4 px-3 border-0 bg-grey rounded fs-4 fw-light'>
											<div className={dataSave.stock === 0 ? 'text-danger' : 'text-success'}>
												{dataSave.stock === 0 ? 'Full Booked' : 'Available'}
											</div>
										</div>
									</div>
									<div className="d-flex justify-content-between">
										<button className="icon-plus button-dark rounded bg-yellow fw-bolder fs-1" onClick={(e)=>decreament(e)}>-</button>
										<div name='stock' className="fw-bolder fs-0">
											{vehicle.dataDetail?.stock ? vehicle.dataDetail.stock : dataSave.stock}
										</div>
										<button className="icon-plus rounded bg-yellow fw-bolder fs-1" onClick={(e)=>increament(e)}>+</button>
									</div>
							
								</div>
							</div>
							<div className="d-flex justify-content-between row">
								<div className="col-5">
									<div className='d-flex position-relative align-items-center'>
										<select className="button-height button-dark w-100 fw-bolder fs-4 shadow-dark form-select text-center" name='category'>
											<option style={{display : 'none'}} className='py-2' value='' selected={vehicle.dataDetail?.idCategory}>Select category</option>
											{category.data.length > 0 && category.data.map((obj)=>{
												return (
													<option key={obj.name} className='border border-2' value={obj.id}>{obj.name}</option>
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

export default VehicleCreate
