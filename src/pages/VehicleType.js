/* eslint-disable react/prop-types */
import React , {useState, useEffect} from 'react'
import { useNavigate, useSearchParams} from 'react-router-dom'
import {default as axios} from 'axios'
import defaultImage from '../assets/image/image 6.png'
import { getVehiclePopular, searchVehicle, getFilterVehicle, getVehicleCategory } from '../redux/actions/vehicle'
import { useSelector, connect, useDispatch } from 'react-redux'
import LayoutHome from '../components/LayoutHome'
import { getLocation } from '../redux/actions/location'
import { getCategory } from '../redux/actions/category'
import LoadingScreen from '../components/LoadingScreen'
import defaultImg from '../assets/image/bike4.png'


export const VehicleType = ({getVehiclePopular, searchVehicle}) => {
	

	const [ errorMsg, setErrorMsg] = useState(null)
	const [ list, setList ] = useState(false)
	
	
	//vehicle list
	const [ vehicleList, setVehicleList] = useState([])
	const [ pageList,setPageList ] = useState({})

	const navigate = useNavigate()
	let [searchParams, setSearchParams] = useSearchParams()

	//new concept
	const locationRedux = useSelector((state)=>state.location)
	const vehicle = useSelector( state =>state.vehicle)
	const category = useSelector( (state)=> state.category)
	const user = useSelector( (state)=> state.user )
	
	const dispatch = useDispatch()
	// didmount
	useEffect(async()=>{
		if(locationRedux.data.length === 0){
			dispatch( getLocation() )
		}
		
		if(category.data.length === 0){
			dispatch( getCategory() )
		} else{
			if(vehicle.dataCategory.length === 0){
				category.data.map( async (item)=>{
					console.log(item.id)
					await dispatch(getVehicleCategory(item.id))
				})
			}
		}
		if(vehicle.dataPopular.length === 0){
			await dispatch( getVehiclePopular() )
		}

		const name = searchParams.get('name')
		const location = searchParams.get('location')
		const sortType = searchParams.get('sortType')
		if( name || location || sortType ){
			document.getElementById('search').elements['name'].value = name
			document.getElementById('search').elements['location'].value = location
			document.getElementById('search').elements['sortType'].value = sortType
			const url = (name,location, sortType) => `http://localhost:5000/vehicles?page=1&name=${name}&location=${location}&sortType=${sortType}`
			getDataSearch(url(name,location, sortType))
		}
	}, [dispatch])

	const getDataSearch = async(url)=>{
		try{
			setErrorMsg(null)
			const {data} = await axios.get(url)
			setVehicleList(data.results)
			setPageList(data.pageInfo)
			setList(true)
		} catch (err){
			// setErrorMsg(err.response.data.message)
			setErrorMsg('Data not found')
		}
	}

	const onSearch = async(event) =>{
		event.preventDefault()
		const name = event.target.elements['name'].value
		const location = event.target.elements['location'].value
		const sortType = event.target.elements['sortType'].value
		setSearchParams({name, location, sortType})
		const {value:{data:search}} = await searchVehicle(name,location,sortType)
		setVehicleList(search.results)
		setPageList(search.pageInfo)
		setList(true)
	}

	const goToDetail = (id) =>{
		if(user.data.role === 'Admin'){
			navigate(`/vehicle/${id}`)
		} else{
			navigate(`/vehiclesType/${id}`)
		}
		
	}

	const goBack = ()=>{
		window.history.back()
	}
	return (
		<LayoutHome>
			{locationRedux.isLoading || vehicle.isLoading || category.isLoading ? (
				<LoadingScreen />
			) : (
				<main>
					<div className="container g-0 my-md-5 my-4 px-5 px-md-0">
						<div className="mb-5">
							<form className="" onSubmit={onSearch} id='search'>
								<div className='row row-cols-1 row-cols-md-12'>
									<div className='col col-md-6 mb-4 '>
										<input type="text" name='name' placeholder="Search vehicle (ex. cars, cars name)" className="form-control rounded button-height text-center text-md-start" autoComplete='off'/>
									</div>
									<div className='col col-md-2 mb-4'>
										<select name='location' className='px-3 form-select rounded button-height text-center text-md-start'>
											<option value='' style={{display: 'none'}}>Select location</option>
											<option value='jakarta'>Jakarta</option>
											<option value='yogyakarta'>Yogyakarta</option>
								
										</select>
									</div>
									<div className='col col-md-2 mb-4'>
										<select name='sortType' className='px-3 form-select rounded button-height text-center text-md-start '>
											<option value='' style={{display: 'none'}}>Sort Type</option>
											<option value='ASC'>A-Z</option>
											<option value='DESC'>Z-A</option>
										</select>
									</div>
									<div className='col col-md-2 d-flex justify-content-center'>
										<button className="fa-solid fa-magnifying-glass text-dark bg-white border border-0 fs-1 d-flex align-items-center pb-lg-3 pb-0" type='submit' ></button>
									</div>
								</div>
							</form>
						</div>
						{vehicle.isError && 
						<div className="alert alert-warning alert-dismissible fade show" role="alert">
							{errorMsg}
							<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
						</div>
						}
						{ list && !vehicle.isError &&
						<button className="d-flex align-items-center mb-3 my-4" onClick={goBack}>
							<i className="fa-solid fa-chevron-left icon dark fs-4 me-3"></i>
							<div className="fs-5 fw-bold text-dark">Vehicle Type</div>
						</button>
						}
						{ list && !vehicle.isError &&
						<div className="d-flex justify-content-between align-items-center mb-5">
							<h1 className="pd-heading">Vehicles List</h1>
							<a href="#"><h5 className="third">view all &gt;</h5></a>
						</div> }
						<div className='d-flex position-relative align-items-center'>
							<div className='row '>
								{ list && !vehicle.isError && vehicleList.map((data) =>{
									return(
										<div key={String(data.id + Math.random())} className='col' style={{cursor:'pointer'}} onClick={()=>goToDetail(data.id)}>
											<div className='d-flex position-relative mb-4'>
												<img src={data.image || defaultImage} alt={data.name} className="rounded img-thumbnail-2"></img>
												<div className='card-name px-3'>
													<div>{data.name}</div>
													<div className='text-muted'>{data.location}</div>
												</div>
											</div>
										</div>
									)})}
							</div>
							{ !vehicle.isError && pageList.prev &&
							<div className='position-absolute start-0 mx-3 bg-primer icon-circle-2 rounded-circle d-flex align-items-center justify-content-center'>
								<button className='fa-solid fa-chevron-left icon fiveth fs-3' onClick={()=>getDataSearch(pageList.prev)}></button>
							</div>
							}
							{ !vehicle.isError && pageList.next &&
							<div className='position-absolute end-0 mx-3 bg-primer icon-circle-2 rounded-circle d-flex align-items-center justify-content-center'>
								<button className='fa-solid fa-chevron-right fiveth fs-3 icon ' onClick={()=>getDataSearch(pageList.next)}></button>
							</div>
							}
						</div>
						{ !list && errorMsg == null &&
						<div className="d-md-flex justify-content-between align-items-center mb-5 ">
							<h1 className="pd-heading text-center text-md-start primer">Popular in Town</h1>
							<a href="#"><h5 className="third text-center text-md-start">view all &gt;</h5></a>
						</div> }
						<div className='position-relative d-flex align-items-center'>
							<div className='row row-cols-md-2 row-cols-xl-4 row-cols-1 mb-xl-4 '>
								{vehicle.dataPopular.length > 0 && vehicle.dataPopular.map((item)=>{
									return (
										<div className='col mb-md-5' key={String(item.id + Math.random()) }  style={{cursor:'pointer'}} onClick={()=>goToDetail(item.id)}>
											<div className="position-relative d-flex justify-content-center mb-5 mb-md-0  w-100">
												<div className='d-flex position-relative'>
													<img src={item.image || defaultImg } alt={item.id} className="rounded img-thumbnail-2" />
													<div className="card-name">
														<div>{item.name}</div>
														<div className="text-muted">{item.location}</div>
													</div>
												</div>
											</div>
										</div>
									)
								})}
							</div>
						</div>
						{category.data.length > 0 && 
							category.data.map((temp)=>{
								return (
									<>
										<div className="d-md-flex justify-content-between align-items-center mb-5" key={String(temp.id + Math.random())}>
											<h1 className="pd-heading text-center text-md-start primer">{temp.name}</h1>
											<a href="#"><h5 className="text-center text-md-start third">view all &gt;</h5></a>
										</div>
										<div className='position-relative d-flex align-items-center'>
											<div className='row row-cols-md-2 row-cols-xl-4 row-cols-1 mb-xl-4 '>
												{vehicle.dataCategory.length > 0 && vehicle.dataCategory.map((item)=>{
													return (
														<div key={String(item.id + Math.random())}>
															{item.idCategory === temp.id && (
																<div className='col mb-md-5' style={{cursor:'pointer'}} onClick={()=>goToDetail(item.id)}>
																	<div className="position-relative d-flex justify-content-center mb-5 mb-md-0  w-100">
																		<div className='d-flex position-relative'>
																			<img src={item.image || defaultImg } alt={item.id} className="rounded img-thumbnail-2" />
																			<div className="card-name">
																				<div>{item.name}</div>
																				<div className="text-muted">{item.location}</div>
																			</div>
																		</div>
																	</div>
																</div>
															)}
														</div>
													)
												})}
											</div>
										</div>
									</>
								)
							})
						}
					</div>
				</main>
			)}
			
		</LayoutHome>
	)
}

const mapStateToProps = state => ({vehicle: state.vehicle})
const mapDispatchToProps = {getVehiclePopular, searchVehicle, getFilterVehicle}

export default connect(mapStateToProps, mapDispatchToProps)(VehicleType)
