/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React , {useState, useEffect} from 'react'
import LayoutLogin from '../components/LayoutLogin'
import { useNavigate, useSearchParams } from 'react-router-dom'
import {default as axios} from 'axios'
import defaultImage from '../assets/image/defaultImage.png'
 
// rafc

export const VehicleType = () => {
	const [ errorMsg, setErrorMsg] = useState(null)

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


	const navigate = useNavigate()
	let [searchParams, setSearchParams] = useSearchParams()
	// didmount
	useEffect(()=>{
		const name = searchParams.get('name')
		const gender = searchParams.get('gender')
		document.getElementById('search').elements['name'].value = name
		document.getElementById('search').elements['gender'].value = gender

		if( name || gender ){
			const url = (name,gender) => `https://rickandmortyapi.com/api/character?name=${name}&gender=${gender}`
			getNextData(url(name,gender), true)
		} else{
			getVehicle()
			getVehiclePopular()
		}
	}, [])

	// useEffect(()=>{
	// 	// console.log(pageCar.next , 'next page')
	// })
	// didUpdate
	const getVehicle = () =>{
		// const {data} = await axios.get('https://rickandmortyapi.com/api/character')
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
			console.log(data.results)
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
			console.log(url.split('filterBy=')[1])
			const filterBy=url.split('filterBy=')[1]
			const {data} = await axios.get(url)
			if(replace){
				setVehicleCar(data.results)
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
				setVehicleCar([])
				setPageCar({
					next:null
				})
			}
		}
	}

	const onSearch = async(event)=>{
		event.preventDefault()
		const name = event.target.elements['name'].value
		const gender = event.target.elements['gender'].value
		const url = (name,gender)=>`https://rickandmortyapi.com/api/character?name=${name}&gender=${gender}`
		setSearchParams({name,gender})
		await getNextData(url(name,gender), true)
	}

	const goToDetail = (id) =>{
		navigate(`/vehiclesType/${id}`)
	}
	return (
		<LayoutLogin>
			<main>
				<div className="container g-0">
					<div className="mb-6">
						<form className="" onSubmit={onSearch} id='search'>
							<div className='input-group d-flex align-items-center'>
								<input type="text" name='name' placeholder="Search vehicle (ex. cars, cars name)" className="form-control rounded button-height"/>
								<select name='gender' className='px-3 form-select rounded button-height'>
									<option value=''  style={{display: 'none'}}>Select a gender</option>
									<option value='male'>Male</option>
									<option value='female'>Female</option>
									<option value='genderless'>Gender-Less</option>
									<option value='unknown'>Unknown</option>
								</select>
								<button className="px-3 fa-solid fa-magnifying-glass icon icon-search text-dark bg-white border border-0" type='submit' ></button>
							</div>
						</form>
					</div>
					{errorMsg !==null && 
						<div className="alert alert-warning alert-dismissible fade show" role="alert">
							{errorMsg}
							<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
						</div>
					}
					{ errorMsg == null &&
						<div className="d-flex justify-content-between align-items-center mb-5">
							<h1 className="pd-heading">Popular in Town</h1>
							<a href="#"><h5 className="text-orange">view all &gt;</h5></a>
						</div>}
					<div className='row '>
						{pagePopular.prev!==null &&
						<div className='col-1 d-flex justify-content-center align-items-center'>
							<button className='fa-solid fa-chevron-left icon dark ' onClick={()=>getNextData(pagePopular.prev)}></button>
						</div>
						}
						{ vehiclePopular.map((data,idx) =>{
							return(
								<div key={String(data.id)} className='col' style={{cursor:'pointer'}} onClick={()=>goToDetail(data.id)}>
									<div className='d-flex position-relative mb-4'>
										<img src={data.image || defaultImage} alt={data.name} className="rounded img-thumbnail-2"></img>
										<div className='card-name px-3'>
											<div>{data.name}</div>
											<div className='text-muted'>{data.location} {idx}</div>
										</div>
									</div>
								</div>
							)})}
						{pagePopular.next!==null &&
						<div className='col-1 d-flex justify-content-center align-items-center'>
							<button className='fa-solid fa-chevron-right icon dark ' onClick={()=>getNextData(pagePopular.next)}></button>
						</div>
						}
					</div>
					{ errorMsg == null &&
						<div className="d-flex justify-content-between align-items-center mb-5">
							<h1 className="pd-heading">Cars</h1>
							<a href="#"><h5 className="text-orange">view all &gt;</h5></a>
						</div>}
					<div className='row '>
						{pageCar.prev!==null &&
						<div className='col-1 d-flex justify-content-center align-items-center'>
							<button className='fa-solid fa-chevron-left icon dark ' onClick={()=>getNextData(pageCar.prev)}></button>
						</div>
						}
						{ vehicleCar.map((data,idx) =>{
							return(
								<div key={String(data.id)} className='col' style={{cursor:'pointer'}} onClick={()=>goToDetail(data.id)}>
									<div className='d-flex position-relative mb-4'>
										<img src={data.image || defaultImage} alt={data.name} className="rounded img-thumbnail-2"></img>
										<div className='card-name px-3'>
											<div>{data.name}</div>
											<div className='text-muted'>{data.location} {idx}</div>
										</div>
									</div>
								</div>
							)})}
						{pageCar.next!==null &&
						<div className='col-1 d-flex justify-content-center align-items-center'>
							<button className='fa-solid fa-chevron-right icon dark ' onClick={()=>getNextData(pageCar.next)}></button>
						</div>
						}
					</div>
					{ errorMsg == null &&
						<div className="d-flex justify-content-between align-items-center mb-5">
							<h1 className="pd-heading">Motorbike</h1>
							<a href="#"><h5 className="text-orange">view all &gt;</h5></a>
						</div>}
					<div className='row '>
						{pageMotorbike.prev!==null &&
						<div className='col-1 d-flex justify-content-center align-items-center'>
							<button className='fa-solid fa-chevron-left icon dark ' onClick={()=>getNextData(pageMotorbike.prev)}></button>
						</div>
						}
						{ vehicleMotorbike.map((data,idx) =>{
							return(
								<div key={String(data.id)} className='col' style={{cursor:'pointer'}} onClick={()=>goToDetail(data.id)}>
									<div className='d-flex position-relative mb-4'>
										<img src={data.image || defaultImage} alt={data.name} className="rounded img-thumbnail-2"></img>
										<div className='card-name px-3'>
											<div>{data.name}</div>
											<div className='text-muted'>{data.location} {idx}</div>
										</div>
									</div>
								</div>
							)})}
						{pageMotorbike.next!==null &&
						<div className='col-1 d-flex justify-content-center align-items-center'>
							<button className='fa-solid fa-chevron-right icon dark ' onClick={()=>getNextData(pageMotorbike.next)}></button>
						</div>
						}
					</div>
					
					{ errorMsg == null &&
						<div className="d-flex justify-content-between align-items-center mb-5">
							<h1 className="pd-heading">Bike</h1>
							<a href="#"><h5 className="text-orange">view all &gt;</h5></a>
						</div>}
					<div className='row '>
						{pageBike.prev!==null &&
						<div className='col-1 d-flex justify-content-center align-items-center'>
							<button className='fa-solid fa-chevron-left icon dark ' onClick={()=>getNextData(pageBike.prev)}></button>
						</div>
						}
						{ vehicleBike.map((data,idx) =>{
							return(
								<div key={String(data.id)} className='col' style={{cursor:'pointer'}} onClick={()=>goToDetail(data.id)}>
									<div className='d-flex position-relative mb-4'>
										<img src={data.image || defaultImage} alt={data.name} className="rounded img-thumbnail-2"></img>
										<div className='card-name px-3'>
											<div>{data.name}</div>
											<div className='text-muted'>{data.location} {idx}</div>
										</div>
									</div>
								</div>
							)})}
						{pageBike.next!==null &&
						<div className='col-1 d-flex justify-content-center align-items-center'>
							<button className='fa-solid fa-chevron-right icon dark ' onClick={()=>getNextData(pageBike.next)}></button>
						</div>
						}
					</div>
				</div>
			</main>
		</LayoutLogin>
	)
}

export default VehicleType