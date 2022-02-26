import React, { Component }  from 'react'
import LayoutHome from '../components/LayoutHome'


export default class HomePage extends Component{
	render(){
		return(
			<LayoutHome>
				<header>
					<div className="img-banner-4 img-fluid img-13">
						<div className="img-banner-4 cover-dark">
							<div className="container py-7 ">
								<div className="pd-heading fs-0-0 lh-2 mb-5 text-center text-md-start">
                            Explore and <br />Travel
								</div>
								<div className="fw-bolder fs-5 mb-2 text-center text-md-start">Vehicle Finder</div>
								<div
									className="border-bottom border-3 button-width-3 rounded mb-5"
								></div>
								<form action="">
									<div className='row row-cols-1 row-cols-md-12 '>
										<div className='col-md-3 col'>
											<div className='position-relative d-flex align-items-center mb-3'>
												<input className='button-light w-100 py-3 text-start px-4 fw-bolder shadow-dark' placeholder='Type'/>
												<div className='fa-solid fa-chevron-down position-absolute end-0 mx-4 fs-4'></div>
											</div>
										</div>
										<div className='col-md-3 col'>
											<div className='position-relative d-flex align-items-center mb-3'>
												<input className='button-light w-100 py-3 text-start px-4 fw-bolder shadow-dark' placeholder='Type'/>
												<div className='fa-solid fa-chevron-down position-absolute end-0 mx-4 fs-4'></div>
											</div>
										</div>
									</div>
									<div className='row row-cols-1 row-cols-md-12 mb-md-3 mb-5'>
										<div className='col-md-3 col'>
											<div className='position-relative d-flex align-items-center mb-3'>
												<input className='button-light w-100 py-3 text-start px-4 fw-bolder shadow-dark' placeholder='Type'/>
												<div className='fa-solid fa-chevron-down position-absolute end-0 mx-4 fs-4'></div>
											</div>
										</div>
										<div className='col-md-3 col'>
											<div className='position-relative d-flex align-items-center'>
												<input className='button-light w-100 py-3 text-start px-4 fw-bolder shadow-dark' placeholder='Type'/>
												<div className='fa-solid fa-chevron-down position-absolute end-0 mx-4 fs-4'></div>
											</div>
										</div>
									</div>
									<div className='row row-cols-1 row-cols-md-12'>
										<div className='col col-md-2'>
											<button className="button-yellow fw-bolder fs-6 py-3 w-100">
                           Explore
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</header>
				<main>
					<div className="container mt-md-5 mt-4">
						<div className="pd-heading text-center text-md-start mb-4">Popular in town</div>
						<div className='row row-cols-md-4 row-cols-1 mb-md-4'>
							<div className='col'>
								<div className="position-relative d-flex justify-content-center mb-5 mb-md-0">
									<div className="img-thumbnail rounded img-1"></div>
									<div className="card-name">
										<div>Merapi</div>
										<div className="text-muted">Yogyakarta</div>
									</div>
								</div>
							</div>
							<div className='col'>
								<div className="position-relative d-flex justify-content-center mb-5 mb-md-0">
									<div className="img-thumbnail rounded img-2"></div>
									<div className="card-name">
										<div>Teluk Bogam</div>
										<div className="text-muted">Kalimantan</div>
									</div>
								</div>
							</div>
							<div className='col'>
								<div className="position-relative d-flex justify-content-center mb-5 mb-md-0">
									<div className="img-thumbnail rounded img-3"></div>
									<div className="card-name">
										<div>Bromo</div>
										<div className="text-muted">Malang</div>
									</div>
								</div>
							</div>
							<div className='col'>
								<div className="position-relative d-flex justify-content-center mb-5 mb-md-0">
									<div className="img-thumbnail rounded img-4"></div>
									<div className="card-name">
										<div>Malioboro</div>
										<div className="text-muted">Yogyakarta</div>
									</div>
								</div>
							</div>
						</div>
						<div className="pd-heading mb-4 text-center text-md-start">Testimonials</div>
						<div className='d-flex justify-content-between flex-column-reverse flex-md-row'>
							<div className='me-md-5 '>
								<div className="d-flex mb-5 mt-6">
									<div className="fa-solid fa-star yellow me-4 fs-4"></div>
									<div className="fa-solid fa-star yellow me-4 fs-4"></div>
									<div className="fa-solid fa-star yellow me-4 fs-4"></div>
									<div className="fa-solid fa-star yellow me-4 fs-4"></div>
									<div className="fa-solid fa-star yellow fs-4"></div>
								</div>
								<div className="fs-4 mb-4">
                              ”It was the right decision to rent vehicle here, I spent less
                              money and enjoy the trip. It was an amazing experience to have a
                              ride for wildlife trip!”
								</div>
								<div className="fs-5 fw-bold mb-2">Edward Newgate</div>
								<div className="fs-6">Founder Circle</div>
							</div>
							<div className='w-100 d-flex justify-content-center'>
								<div className="img-testimonial img-14"></div>
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
				</main>
			</LayoutHome>
		)
	}
}