/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React , {useState, useEffect} from 'react'
import LayoutLogin from '../components/LayoutLogin'
import { useNavigate, useSearchParams } from 'react-router-dom'
import {default as axios} from 'axios'
 
// rafc

export const VehicleType = () => {
	const [ errorMsg, setErrorMsg] = useState(null)
	const [ character,setCharacter ] = useState([])
	const [ page,setPage ] = useState({})

	const navigate = useNavigate()
	let [searchParams, setSearchParams] = useSearchParams()
	// didmount
	useEffect(()=>{
		const name = searchParams.get('name')
		const gender = searchParams.get('gender')

		if( name || gender ){
			const url = (name,gender) => `https://rickandmortyapi.com/api/character?name=${name}&gender=${gender}`
			document.getElementById('search').elements('name').value = name
			document.getElementById('search').elements('gender').value = gender
			console.log(name,gender)
			getNextData(url(name,gender), true)
		} else{
			getCharacter()
		}
	}, [])

	// didUpdate
	const getCharacter = async() =>{
		const {data} = await axios.get('https://rickandmortyapi.com/api/character')
		// const {data} = await axios.get('http://localhost:5000/list?filterBy=Car')
		setCharacter(data.results)
		setPage(data.info)
	}

	//did update
	const getNextData = async(url, replace=false) =>{
		try{
			setErrorMsg(null)
			console.log(replace)
			console.log(url)
			const {data} = await axios.get(url)
			if(replace){
				setCharacter(data.results)
			} else{
				setCharacter([
					...character,
					...data.results
				])
			}
			setPage(data.info)
		} catch(err){
			console.log(err)
			if(err.message.includes('404')){
				setErrorMsg('Data not found!')
				setCharacter([])
				setPage({
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
							<h1 className="pd-heading">Cars</h1>
							<a href="#"><h5 className="text-orange">view all &gt;</h5></a>
						</div>}
					<div className='row row-cols-md-4'>
						{ character.map((data,idx) =>{
							return(
								<div key={String(data.id)} className='col' style={{cursor:'pointer'}} onClick={()=>goToDetail(data.id)}>
									<div className='d-flex position-relative mb-4'>
										<img src={data.image} alt={data.className} className="img-fluid rounded"></img>
										<div className='bg-white position-absolute bottom-0 start-0 p-3 fs-6 fw-bold'>{data.name} {data.id}</div>
									</div>
									
								</div>
							)})}
					</div>
					
					{page.next!==null &&<div className='row'>
						<div className='col text-center'>
							<button className='btn btn-primary' onClick={()=>getNextData(page.next)}> Load More</button>
						</div>
					</div>}
					<div className="d-flex justify-content-between align-items-center mb-5">
						<h1 className="pd-heading">Popular In Town</h1>
						<a href="#"><h5 className="text-orange">view all &gt;</h5></a>
					</div>
					<div className="d-flex justify-content-between mb-6">
						<div className="position-relative d-flex">
							<div className="img-thumbnail rounded img-1"></div>
							<div className="card-name">
								<div>Merapi</div>
								<div className="text-muted">Yogyakarta</div>
							</div>
						</div>
						<div className="position-relative d-flex">
							<div className="img-thumbnail rounded img-2"></div>
							<div className="card-name">
								<div>Teluk Bogam</div>
								<div className="text-muted">Kalimantan</div>
							</div>
						</div>
						<div className="position-relative d-flex">
							<div className="img-thumbnail rounded img-3"></div>
							<div className="card-name">
								<div>Bromo</div>
								<div className="text-muted">Malang</div>
							</div>
						</div>
						<div className="position-relative d-flex">
							<div className="img-thumbnail rounded img-4"></div>
							<div className="card-name">
								<div>Malioboro</div>
								<div className="text-muted">Yogyakarta</div>
							</div>
						</div>
					</div>
					{/* sad */}
					<div className="d-flex justify-content-between align-items-center mb-5">
						<h1 className="pd-heading">Cars</h1>
						<a href="#"><h5 className="text-orange">view all &gt;</h5></a>
					</div>
					<div className="d-flex justify-content-between mb-6">
						<div className="position-relative d-flex">
							<div className="img-thumbnail rounded img-1"></div>
							<div className="card-name">
								<div>Van</div>
								<div className="text-muted">Yogyakarta</div>
							</div>
						</div>
						<div className="position-relative d-flex">
							<div className="img-thumbnail rounded img-5"></div>
							<div className="card-name">
								<div>Lamborghini</div>
								<div className="text-muted">South Jakarta</div>
							</div>
						</div>
						<div className="position-relative d-flex">
							<div className="img-thumbnail rounded img-3"></div>
							<div className="card-name">
								<div>Jeep</div>
								<div className="text-muted">Malang</div>
							</div>
						</div>
						<div className="position-relative d-flex">
							<div className="img-thumbnail rounded img-6"></div>
							<div className="card-name">
								<div>White Jeep</div>
								<div className="text-muted">Kalimantan</div>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-between align-items-center mb-5">
						<h1 className="pd-heading">Motorbike</h1>
						<a href="#"><h5 className="text-orange">view all &gt;</h5></a>
					</div>
					<div className="d-flex justify-content-between mb-6">
						<div className="position-relative d-flex">
							<div className="img-thumbnail rounded img-7"></div>
							<div className="card-name">
								<div>Vespa</div>
								<div className="text-muted">Yogyakarta</div>
							</div>
						</div>
						<div className="position-relative d-flex">
							<div className="img-thumbnail rounded img-2"></div>
							<div className="card-name">
								<div>Honda KLX</div>
								<div className="text-muted">Kalimantan</div>
							</div>
						</div>
						<div className="position-relative d-flex">
							<div className="img-thumbnail rounded img-8"></div>
							<div className="card-name">
								<div>Honda</div>
								<div className="text-muted">Malang</div>
							</div>
						</div>
						<div className="position-relative d-flex">
							<div className="img-thumbnail rounded img-4"></div>
							<div className="card-name">
								<div>Matic Bike</div>
								<div className="text-muted">Yogyakarta</div>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-between align-items-center mb-5">
						<h1 className="pd-heading">Bike</h1>
						<a href="#"><h5 className="text-orange">view all &gt;</h5></a>
					</div>
					<div className="d-flex justify-content-between mb-2">
						<div className="position-relative d-flex">
							<div className="img-thumbnail rounded img-9"></div>
							<div className="card-name">
								<div>Fixie</div>
								<div className="text-muted">Yogyakarta</div>
							</div>
						</div>
						<div className="position-relative d-flex">
							<div className="img-thumbnail rounded img-10"></div>
							<div className="card-name">
								<div>Sport Bike</div>
								<div className="text-muted">Kalimantan</div>
							</div>
						</div>
						<div className="position-relative d-flex">
							<div className="img-thumbnail rounded img-11"></div>
							<div className="card-name">
								<div>Onthel</div>
								<div className="text-muted">Malang</div>
							</div>
						</div>
						<div to="../vehicleDetail">
							<div className="position-relative d-flex">
								<div className="img-thumbnail rounded img-12"></div>
								<div className="card-name">
									<div className="text-dark">Fixie Gray</div>
									<div className="text-muted">Yogyakarta</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</LayoutLogin>
	)
}

export default VehicleType