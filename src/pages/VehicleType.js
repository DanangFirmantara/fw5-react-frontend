/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React , {useState, useEffect} from 'react'
import LayoutLogin from '../components/LayoutLogin'
import { Link, useSearchParams } from 'react-router-dom'
import {default as axios} from 'axios'
 
// rafc

export const VehicleType = () => {
	// const [searchParam, setSearchParam] = useSearchParams()
	const [ character,setCharacter ] = useState([])
	const [ page,setPage ] = useState({})

	useEffect(()=>{
		getCharacter()
	}, [])

	const getCharacter = async() =>{
		// const {data} = await axios.get('https://rickandmortyapi.com/api/character')
		const {data} = await axios.get('http://localhost:5000/list?filterBy=Car')
		console.log(data.results)
		console.log(data.pageInfo)
		setCharacter(data.results)
		setPage(data.pageInfo)
	}

	const getNextCharacter = async(url) =>{
		const {data} = await axios.get(url)
		setCharacter([
			...character,
			...data.results
		])
		setPage(data.info)
	}
	return (
		<LayoutLogin>
			<main>
				<div className="container g-0">
					<div className="mb-6">
						<form action="" className="">
							<div className="d-flex position-relative">
								<input
									type="search"
									placeholder="Search vehicle (ex. cars, cars name)"
									className="form-control rounded button-height"
								/>
								<a
									href="/vehicle-detail.html"
									className="fa-solid fa-magnifying-glass icon position-absolute icon-search text-dark"
								></a>
							</div>
						</form>
					</div>
					<div>

					</div>
					<div className="d-flex justify-content-between align-items-center mb-5">
						<h1 className="pd-heading">Rick and Morty</h1>
						<a href="#"><h5 className="text-orange">view all &gt;</h5></a>
					</div>
					<div className='row row-cols-4'>
						{ character.map((data,idx) =>{
							return(
								<div className='col'>
									<div key={String(data.id)} className='d-flex position-relative mb-4'>
										<img src={data.image} alt={data.className} className="img-thumbnail rounded"></img>
										<div className='bg-white position-absolute bottom-0 start-0 p-3 fs-6 fw-bold'>{data.name} {data.id}</div>
									</div>
									
								</div>
							)})}
					</div>
					<div className='row'>
						<div className='col text-center'>
							<button className='btn btn-primary' onClick={()=>getNextCharacter(page.next)}> Load More</button>
						</div>
					</div>
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
						<Link to="../vehicleDetail">
							<div className="position-relative d-flex">
								<div className="img-thumbnail rounded img-12"></div>
								<div className="card-name">
									<div className="text-dark">Fixie Gray</div>
									<div className="text-muted">Yogyakarta</div>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</main>
		</LayoutLogin>
	)
}

export default VehicleType