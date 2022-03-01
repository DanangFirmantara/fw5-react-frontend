/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React , {useState, useEffect} from 'react'
import LayoutLogin from '../components/LayoutLogin'
import { useNavigate, useSearchParams } from 'react-router-dom'
import {default as axios} from 'axios'
import defaultImage from '../assets/image/image 6.png'
 
// rafc

export const VehicleType = () => {
	const [ errorMsg, setErrorMsg] = useState(null)
	const [ list, setList ] = useState(false)

	//car list
	const [ vehicleCar, setVehicleCar] = useState([])
	const [ pageCar,setPageCar ] = useState({})

	//motorbike list
	const [ vehicleMotorbike, setVehicleMotorbike] = useState([])
	const [ pageMotorbike,setPageMotorbike ] = useState({})

	//bike list
	const [ vehicleBike, setVehicleBike] = useState([])
	const [ pageBike,setPageBike ] = useState({})

	//popular list
	const [ vehiclePopular, setVehiclePopular] = useState([])
	const [ pagePopular,setPagePopular ] = useState({})
	
	//vehicle list
	const [ vehicleList, setVehicleList] = useState([])
	const [ pageList,setPageList ] = useState({})


	const navigate = useNavigate()
	let [searchParams, setSearchParams] = useSearchParams()
	// didmount
	useEffect(()=>{
		const name = searchParams.get('name')
		const location = searchParams.get('location')
		const sortType = searchParams.get('sortType')
		if( name || location || sortType ){
			document.getElementById('search').elements['name'].value = name
			document.getElementById('search').elements['location'].value = location
			document.getElementById('search').elements['sortType'].value = sortType
			const url = (name,location, sortType) => `http://localhost:5000/vehicles?page=1&name=${name}&location=${location}&sortType=${sortType}`
			getDataSearch(url(name,location, sortType))
		} else{
			getVehicle()
			getVehiclePopular()
		}
	}, [])

	const getVehicle = () =>{
		const filterBy = ['car', 'motorbike', 'bike']
		filterBy.map(async obj=>{
			try{
				let {data} = await axios.get(`http://localhost:5000/list?filterBy=${obj}`)
				if(data){
					if(obj=='car'){
						setVehicleCar(data.results)
						setPageCar(data.pageInfo)
					} else if(obj == 'motorbike'){
						setVehicleMotorbike(data.results)
						setPageMotorbike(data.pageInfo)
					} else if(obj== 'bike'){
						setVehicleBike(data.results)
						setPageBike(data.pageInfo)
					}
				}
				
			} catch (err){
				console.log(err)
			}
		})
	}

	const getVehiclePopular = async()=>{
		try{
			let {data} = await axios.get('http://localhost:5000/popular')
			setVehiclePopular(data.results)
			setPagePopular(data.pageInfo)
		} catch (err){
			console.log(err)
		}
		
	}

	//did update
	const getNextData = async(url, replace=false) =>{
		try{
			setErrorMsg(null)
			const filterBy=url.split('filterBy=')[1]	
			const {data} = await axios.get(url)
			if(replace){
				setVehicleList(data.results)
				setPageList(data.pageInfo)
				setList(true)
			} else{
				if(filterBy=='car'){
					setVehicleCar(data.results)
					setPageCar(data.pageInfo)
				} else if(filterBy =='motorbike'){
					setVehicleMotorbike(data.results)
					setPageMotorbike(data.pageInfo)
				} else if(filterBy =='bike'){
					setVehicleBike(data.results)
					setPageBike(data.pageInfo)
				} else{
					setVehiclePopular(data.results)
					setPagePopular(data.pageInfo)
				}
			}
		} catch(err){
			console.log(err)
			if(err.message.includes('404')){
				setErrorMsg('Data not found!')
				setVehicleList([])
				setPageList({
					next:null
				})
			}
		}
	}

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

	const onSearch = async(event)=>{
		try{
			event.preventDefault()
			const name = event.target.elements['name'].value
			const location = event.target.elements['location'].value
			const sortType = event.target.elements['sortType'].value
			const data = {name, location, sortType}
			const url = (data)=>{
				let url = ''
				let i = 0

				if (data) {
					var temp = Object.entries(data).length - 1

					if (data.page) {
						temp -= 1
					}
					for (const [key, value] of Object.entries(data)){
						if(key != 'page'){
							url += key + '=' + value
	
							if(i<temp){
								url += '&'
							}
							i++
						}
						
					}
				}
				url = `http://localhost:5000/vehicles?page=1&${url}`
				return url
			}
			await getDataSearch(url(data))
		} catch(err){
			console.log('error bro 3')
		}
	}

	const goToDetail = (id) =>{
		navigate(`/vehiclesType/${id}`)
	}
	return (
		<LayoutLogin>
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
					{errorMsg !==null && 
						<div className="alert alert-warning alert-dismissible fade show" role="alert">
							{errorMsg}
							<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
						</div>
					}
					{ list && errorMsg == null &&
						<div className="d-flex justify-content-between align-items-center mb-5">
							<h1 className="pd-heading">Vehicles List</h1>
							<a href="#"><h5 className="third">view all &gt;</h5></a>
						</div> }
					<div className='d-flex position-relative align-items-center'>
						<div className='row '>
							{ list && errorMsg == null && vehicleList.map((data,idx) =>{
								return(
									<div key={String(data.id)} className='col' style={{cursor:'pointer'}} onClick={()=>goToDetail(data.id)}>
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
						{ list && errorMsg == null && pageList.prev!==null &&
							<div className='position-absolute start-0 mx-3 bg-primer rounded'>
								<button className='fa-solid fa-chevron-left icon fiveth ' onClick={()=>getDataSearch(pageList.prev)}></button>
							</div>
						}
						{ list && errorMsg == null && pageList.next!==null &&
							<div className='position-absolute end-0 mx-3 bg-primer rounded'>
								<button className='fa-solid fa-chevron-right icon fiveth ' onClick={()=>getDataSearch(pageList.next)}></button>
							</div>
						}
					</div>
					{ !list && errorMsg == null &&
						<div className="d-md-flex justify-content-between align-items-center mb-5 ">
							<h1 className="pd-heading text-center text-md-start primer">Popular in Town</h1>
							<a href="#"><h5 className="third text-center text-md-start">view all &gt;</h5></a>
						</div> }
					<div className='position-relative d-flex align-items-center'>
						<div className='row'>
							{ !list && errorMsg == null && vehiclePopular.map((data,idx) =>{
								return(
									<div key={String(data.id)} className='col' style={{cursor:'pointer'}} onClick={()=>goToDetail(data.id)}>
										<div className='d-flex position-relative mb-4'>
											<img src={data.image || defaultImage} alt={data.name} className="rounded img-thumbnail-2"></img>
											<div className='card-name px-3'>
												<div>{data.name}</div>
												<div className='text-muted'>{data.location} </div>
											</div>
										</div>
									</div>
								)})}
						</div>
						{ !list && errorMsg == null && pagePopular.prev!==null &&
							<div className='position-absolute end-0 mx-3 rounded bg-primer'>
								<button className='fa-solid fa-chevron-left icon fiveth' onClick={()=>getNextData(pagePopular.prev)}></button>
							</div>
						}
						{ !list && errorMsg == null && pagePopular.next!==null &&
							<div className='position-absolute end-0 mx-3 rounded bg-primer'>
								<button className='fa-solid fa-chevron-right icon  fiveth' onClick={()=>getNextData(pagePopular.next)}></button>
							</div>
						}
					</div>
					
					{ !list && errorMsg == null &&
						<div className="d-md-flex justify-content-between align-items-center mb-5">
							<h1 className="pd-heading text-center text-md-start primer">Cars</h1>
							<a href="#"><h5 className="text-center text-md-start third">view all &gt;</h5></a>
						</div>}
					<div className='d-flex position-relative align-items-center'>
						<div className='row'>
							{ !list && errorMsg == null && vehicleCar.map((data,idx) =>{
								return(
									<div key={String(data.id)} className='col' style={{cursor:'pointer'}} onClick={()=>goToDetail(data.id)}>
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
						{ !list && errorMsg == null && pageCar.prev!==null &&
						<div className='position-absolute left-0 bg-primer rounded ms-3'>
							<button className='fa-solid fa-chevron-left icon fiveth' onClick={()=>getNextData(pageCar.prev)}></button>
						</div>
						}
						{ !list && errorMsg == null && pageCar.next!==null &&
						<div className='position-absolute end-0 bg-primer rounded me-3'>
							<button className='fa-solid fa-chevron-right icon fiveth ' onClick={()=>getNextData(pageCar.next)}></button>
						</div>
						}
					</div>
					{ !list && errorMsg == null &&
						<div className="d-flex justify-content-between align-items-center mb-5">
							<h1 className="pd-heading">Motorbike</h1>
							<a href="#"><h5 className="third">view all &gt;</h5></a>
						</div>}
					<div className='d-flex position-relative align-items-center '>
						<div className='row'>
							{ !list && errorMsg == null && vehicleMotorbike.map((data,idx) =>{
								return(
									<div key={String(data.id)} className='col' style={{cursor:'pointer'}} onClick={()=>goToDetail(data.id)}>
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
						{ !list && errorMsg == null && pageMotorbike.prev!==null &&
						<div className='position-absolute left-0 ms-3 rounded bg-primer'>
							<button className='fa-solid fa-chevron-left icon dark ' onClick={()=>getNextData(pageMotorbike.prev)}></button>
						</div>
						}
						{ !list && errorMsg == null && pageMotorbike.next!==null &&
						<div className='position-absolute end-0 bg-primer rounded me-3'>
							<button className='fa-solid fa-chevron-right icon dark ' onClick={()=>getNextData(pageMotorbike.next)}></button>
						</div>
						}
					</div>
					
					{ !list && errorMsg == null &&
						<div className="d-flex justify-content-between align-items-center mb-5">
							<h1 className="pd-heading">Bike</h1>
							<a href="#"><h5 className="third">view all &gt;</h5></a>
						</div>}
					<div className='d-flex position-relative align-items-center'>
						<div className='row '>
							{ !list && errorMsg == null && vehicleBike.map((data,idx) =>{
								return(
									<div key={String(data.id)} className='col' style={{cursor:'pointer'}} onClick={()=>goToDetail(data.id)}>
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
						{ !list && errorMsg == null && pageBike.prev!==null &&
						<div className='position-absolute bg-primer rounded left-0'>
							<button className='fa-solid fa-chevron-left icon fiveth ' onClick={()=>getNextData(pageBike.prev)}></button>
						</div>
						}
						{ !list && errorMsg == null && pageBike.next!==null &&
						<div className='position-absolute bg-primer rounded end-0'>
							<button className='fa-solid fa-chevron-right icon fiveth ' onClick={()=>getNextData(pageBike.next)}></button>
						</div>
						}
					</div>
					
				</div>
			</main>
		</LayoutLogin>
	)
}

export default VehicleType