/* eslint-disable react/prop-types */
import React , {useState, useEffect} from 'react'
import { useNavigate, useParams} from 'react-router-dom'
import {default as axios} from 'axios'
import defaultImage from '../assets/image/image 6.png'
import { getVehiclePopular, searchVehicle, getFilterVehicle, getViewMorePopular, getViewMoreCategory } from '../redux/actions/vehicle'
import { useSelector, connect, useDispatch } from 'react-redux'
import LayoutHome from '../components/LayoutHome'
import { getLocation } from '../redux/actions/location'
import LoadingScreen from '../components/LoadingScreen'
import defaultImg from '../assets/image/bike4.png'
import Pagination from '../components/Pagination'


export const ViewMore = () => {
	const [ errorMsg, setErrorMsg] = useState(null)
	const [ list, setList ] = useState(false)
	
	//vehicle list
	const [ vehicleList, setVehicleList] = useState([])
	const [ pageList,setPageList ] = useState({})

	const navigate = useNavigate()

	//new concept
	const locationRedux = useSelector((state)=>state.location)
	const vehicle = useSelector( state =>state.vehicle)
	const category = useSelector( (state)=> state.category)
	const user = useSelector( (state)=> state.user )
	
	const dispatch = useDispatch()

	const {filterBy} = useParams()
	// didmount
	useEffect(()=>{
		if(locationRedux.data.length === 0){
			dispatch( getLocation() )
		}
		console.log(filterBy)
		if(filterBy === 'popular'){
			dispatch(getViewMorePopular())
		} else{
			dispatch(getViewMoreCategory(filterBy))
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

	const goToDetail = (id) =>{
		if(user.data.role === 'Admin'){
			navigate(`/vehicle/${id}`)
		} else{
			navigate(`/vehiclesType/${id}`)
		}
		
	}

	const onBack = ()=>{
		window.history.back()
	}

	return (
		<LayoutHome>
			{locationRedux.isLoading || vehicle.isLoading || category.isLoading ? (
				<LoadingScreen />
			) : (
				<main>
					<div className="container g-0 my-md-5 my-4 px-5 px-md-0">
						<div className='d-flex align-items-center mb-4'>
							<div className="fa-solid fa-chevron-left icon dark fs-2 me-4" style={{cursor:'pointer'}} onClick={() => onBack()}/>
							<div className="fs-2 fw-bold text-dark">Vehicle type</div>
						</div>
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
						<div className="text-start align-items-center mb-5">
							{filterBy === 'popular' ? (
								<h1 className="pd-heading text-center text-md-start primer">Popular in town</h1>
							) : category.data.length > 0 && category.data.map((item) =>{
								return (
									<div key={String(item.id)}>
										{item.id === parseInt(filterBy) && (
											<h1 className="pd-heading text-center text-md-start primer">{item.name}</h1>
										)}
									</div>
								)
							})}
						</div>  }
						<Pagination totalPage={vehicle.pIViewMore?.lastPage} pageInfo={vehicle.pIViewMore} activePage={vehicle.pIViewMore?.currentPage}/>
						<div className='position-relative d-flex align-items-center'>
							<div className='row row-cols-md-2 row-cols-xl-4 row-cols-1 mb-xl-4 '>
								{vehicle.dataViewMore.length > 0 && vehicle.dataViewMore.map((item)=>{
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
					</div>
				</main>
			)}
			
		</LayoutHome>
	)
}

const mapStateToProps = state => ({vehicle: state.vehicle})
const mapDispatchToProps = {getVehiclePopular, searchVehicle, getFilterVehicle}

export default connect(mapStateToProps, mapDispatchToProps)(ViewMore)
