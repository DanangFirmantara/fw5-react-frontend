import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LayoutHome from '../components/LayoutHome'
import LoadingScreen from '../components/LoadingScreen'
import { getVehiclePopular } from '../redux/actions/vehicle'
import defaultImg from '../assets/image/bike4.png'
import { getUser } from '../redux/actions/user'

export const HomePage = () => {
	const vehicle = useSelector( state=> state.vehicle )
	const auth = useSelector( state=> state.auth )

	const dispatch = useDispatch()

	useEffect(()=>{
		dispatch( getUser(auth.token))
		if(vehicle.dataPopular.length === 0){
			dispatch( getVehiclePopular() )
		}
	}, [dispatch])
	
	return (
		<LayoutHome>
			{vehicle.isLoading && (<LoadingScreen />)}
			<header>
				<div className="img-banner-4 img-fluid img-13">
					<div className="img-banner-4 img-fluid cover-dark">
						<div className="container py-7 px-5">
							<div className="pd-heading fs-0-0 lh-2 mb-lg-5 mb-3 text-center text-lg-start">
								Explore and <br />Travel
							</div>
							<div className="fw-bolder fs-5 mb-lg-2 mb-4 text-center text-lg-start">Vehicle Finder</div>
							<div
								className="border-bottom border-3 button-width-3 rounded mb-5 d-none d-lg-block"
							></div>
							<form action="">
								<div className='row row-cols-1 row-cols-lg-12 '>
									<div className='col-lg-3 col'>
										<div className='position-relative d-flex align-items-center mb-3'>
											<input className='button-light w-100 py-3 text-start px-4 fw-bolder shadow-dark' placeholder='Location'/>
											<div className='fa-solid fa-chevron-down position-absolute end-0 mx-4 fs-4'></div>
										</div>
									</div>
									<div className='col-lg-3 col'>
										<div className='position-relative d-flex align-items-center mb-3'>
											<input className='button-light w-100 py-3 text-start px-4 fw-bolder shadow-dark' placeholder='Type'/>
											<div className='fa-solid fa-chevron-down position-absolute end-0 mx-4 fs-4'></div>
										</div>
									</div>
								</div>
								<div className='row row-cols-1 row-cols-lg-12 mb-md-3 mb-5'>
									<div className='col-lg-3 col'>
										<div className='position-relative d-flex align-items-center mb-3'>
											<input className='button-light w-100 py-3 text-start px-4 fw-bolder shadow-dark' placeholder='Payment'/>
											<div className='fa-solid fa-chevron-down position-absolute end-0 mx-4 fs-4'></div>
										</div>
									</div>
									<div className='col-lg-3 col'>
										<div className='position-relative d-flex align-items-center'>
											<input className='button-light w-100 py-3 text-start px-4 fw-bolder shadow-dark' placeholder='Date'/>
											<div className='fa-solid fa-chevron-down position-absolute end-0 mx-4 fs-4'></div>
										</div>
									</div>
								</div>
								<div className='row row-cols-1 row-cols-lg-12'>
									<div className='col col-lg-2'>
										<button className="button-second fw-bolder fs-6 py-3 w-100">
						Explore
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</header>
			<main >
				<div className="container mt-md-5 mt-4">
					<div className="pd-heading text-center text-md-start pb-4">Popular in town</div>
					<div className='row row-cols-md-2 row-cols-xl-4 row-cols-1 mb-xl-4 '>
						{vehicle.dataPopular.length > 0 && vehicle.dataPopular.map((item)=>{
							return (
								<div className='col mb-md-5' key={String(item.id)}>
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
					<div className="pd-heading my-4 text-center text-md-start">Testimonials</div>
					<div className='d-flex justify-content-between flex-column-reverse flex-md-row mb-md-5 mb-4'>
						<div className='me-md-5 d-md-flex align-items-center'>
							<div className='d-md-flex flex-column aign-items-center'>
								<div className="d-md-flex mb-md-5 my-5 my-md-0 text-center ">
									<div className="fa-solid fa-star yellow me-4 fs-4"></div>
									<div className="fa-solid fa-star yellow me-4 fs-4"></div>
									<div className="fa-solid fa-star yellow me-4 fs-4"></div>
									<div className="fa-solid fa-star yellow me-4 fs-4"></div>
									<div className="fa-solid fa-star yellow fs-4"></div>
								</div>
								<div className="fs-4 mb-4 text-center text-md-start">
							???It was the right decision to rent vehicle here, I spent less
							money and enjoy the trip. It was an amazing experience to have a
							ride for wildlife trip!???
								</div>
								<div className="fs-5 fw-bold mb-2 text-center text-md-start">Edward Newgate</div>
								<div className="fs-6 text-center text-md-start">Founder Circle</div>
							</div>
					
						</div>
						<div className='w-100 d-flex justify-content-center'>
							<div className='d-flex position-relative'>
								<div className="img-testimonial img-14 d-none d-lg-block"></div>
								<div className="img-thumbnail img-14 d-lg-none"></div>
								<div className="card-name-3 ">
									<div className="d-flex justify-content-end mt-3">
										<div
											className="border border-3 icon-circle-2 rounded-circle d-flex justify-content-center align-items-center grey-2 border-grey me-3"
										>
											<i className="fa-solid fa-chevron-left fs-4"></i>
										</div>
										<div
											className="border border-3 border-dark icon-circle-2 rounded-circle d-flex justify-content-center align-items-center"
										>
											<i className="fa-solid fa-chevron-right fs-4"></i>
										</div>
									</div>
								</div>
							</div>
					
						</div>
					</div>
				</div>
			</main>
		</LayoutHome>
	)
}

export default HomePage
