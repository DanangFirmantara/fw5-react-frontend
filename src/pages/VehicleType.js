/* eslint-disable no-prototype-builtins */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React , {useState, useEffect} from 'react'
import { useNavigate, useSearchParams} from 'react-router-dom'
import {default as axios} from 'axios'
import defaultImage from '../assets/image/image 6.png'
import { getVehiclePopular, searchVehicle, getFilterVehicle, getVehicleCategory, doSearchVehicle } from '../redux/actions/vehicle'
import { useSelector, connect, useDispatch } from 'react-redux'
import LayoutHome from '../components/LayoutHome'
import { getLocation } from '../redux/actions/location'
import { getCategory } from '../redux/actions/category'
import LoadingScreen from '../components/LoadingScreen'
import defaultImg from '../assets/image/bike4.png'


export const VehicleType = ({getVehiclePopular, searchVehicle}) => {
	

	const [ errorMsg, setErrorMsg] = useState(null)
	const [ list, setList ] = useState(false)
	const [ search, setSearch ] = useState({})
	
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
		const idLocation = searchParams.get('idLocation')
		const idCategory = searchParams.get('idCategory')
		const sortType = searchParams.get('sortType')
		console.log(idLocation)
		const data = {}
		let n = 0
		if(name){
			setSearch({ ...search, name })
			data['name'] = name
			n++
		}
		if(idLocation){
			setSearch({ ...search, idLocation })
			data['idLocation'] = idLocation
			n++
		}
		if(idCategory){
			setSearch({ ...search, idCategory })
			data['idCategory'] = idCategory
			n++
		}
		if(sortType){
			setSearch({ ...search, sortType})
			data['sortType'] = sortType
			n++
		}
		if(n> 0){
			setList(true)
			console.log(data)
			await dispatch(doSearchVehicle(data))
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
		const data = {}
		let n=0
		const name = event.target.elements['name'].value
		const idCategory = event.target.elements['category'].value
		const idLocation = event.target.elements['location'].value
		const sortType = event.target.elements['sortType'].value
		console.log(name)
		if(name){
			data['name'] = name
			n++
		}
		if(idCategory !== ''){
			data['idCategory'] = idCategory
			n++
		}
		if(idLocation !== ''){
			data['idLocation'] = idLocation
			n++
		}
		if(sortType !== ''){
			data['sortType'] = sortType
			n++
		}
		if(n !== 0){
			setSearchParams(data)
			dispatch(doSearchVehicle(data))
			setList(true)
		}
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

	const viewMore = (data) =>{
		console.log(data, 'ini data routenya bg')
		navigate(`/viewMore/${data}`)
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
									<div className='col col-md-4  '>
										<input type="text" name='name' placeholder="Search vehicle (ex. cars, cars name)" className="form-control rounded button-height text-center text-md-start"  autoComplete='off'/>
									</div>
									<div className='col col-md-2 '>
										<select name='category' className='px-3 form-select rounded button-height text-center text-md-start'>
											<option value='' style={{display: 'none'}} className='border border-2'>Select category</option>
											{category.data.length > 0 && category.data.map((obj)=>{
												return (
													<option key={obj.name} selected={search?.idCategory == obj.id}  className='border border-2' value={obj.id}>{obj.name}</option>
												)
											})}
										</select>
									</div>
									<div className='col col-md-2 '>
										<select name='location' className='px-3 form-select rounded button-height text-center text-md-start'>
											<option value='' style={{display: 'none'}} className='border border-2'>Select location</option>
											{locationRedux.data.length > 0 && locationRedux.data.map((obj)=>{
												return (
													<option key={obj.name} selected={search?.idLocation == obj.id}  className='border border-2' value={obj.id}>{obj.name}</option>
												)
											})}
										</select>
									</div>
									<div className='col col-md-2 '>
										<select name='sortType' className='px-3 form-select rounded button-height text-center text-md-start '>
											<option value='' style={{display: 'none'}}>Sort Type</option>
											<option value='ASC' selected={search.hasOwnProperty('sortType') && search.sortType === 'ASC'}>A-Z</option>
											<option value='DESC' selected={search.hasOwnProperty('sortType') && search.sortType === 'DESC'}>Z-A</option>
										</select>
									</div>
									<div className='col col-md-2 d-flex justify-content-center'>
										<button className="button-third w-100 fs-3" type='submit' >Search</button>
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
						{ list &&
						<div className="d-flex justify-content-between align-items-center mb-5">
							<h1 className="pd-heading">Vehicles Search</h1>
							<a href="#"><h5 className="third">view all &gt;</h5></a>
						</div> }
						<div className='position-relative d-flex align-items-center'>
							<div className='row row-cols-md-2 row-cols-xl-4 row-cols-1 mb-xl-4 '>
								{ list && vehicle.dataSearch.length > 0 && vehicle.dataSearch.map((item)=>{
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
						{ !list && errorMsg == null &&
						<div className="d-md-flex justify-content-between align-items-center mb-5 ">
							<h1 className="pd-heading text-center text-md-start primer">Popular in Town</h1>
							<div style={{cursor:'pointer'}} onClick={()=>viewMore('popular')}><h5 className="third text-center text-md-start">view all &gt;</h5></div>
						</div> }
						<div className='position-relative d-flex align-items-center'>
							<div className='row row-cols-md-2 row-cols-xl-4 row-cols-1 mb-xl-4 '>
								{ !list && vehicle.dataPopular.length > 0 && vehicle.dataPopular.map((item)=>{
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
						{ !list && category.data.length > 0 && 
							category.data.map((temp)=>{
								return (
									<>
										<div className="d-md-flex justify-content-between align-items-center mb-5" key={String(temp.id + Math.random())}>
											<h1 className="pd-heading text-center text-md-start primer">{temp.name}</h1>
											<div style={{cursor:'pointer'}} onClick={()=>viewMore(temp.id)}><h5 className="third text-center text-md-start">view all &gt;</h5></div>
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
