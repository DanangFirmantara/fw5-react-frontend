import React, { Component }  from 'react'
import LayoutHome from '../components/LayoutHome'


export default class HomePage extends Component{
	render(){
		return(
			<LayoutHome>
				<header>
					<div className="img-banner-4 img-13">
						<div className="img-banner-4 cover-dark">
							<div className="container container-md py-7">
								<div className="pd-heading fs-0-0 lh-2 mb-5">
                            Explore and <br />Travel
								</div>
								<div className="fw-bolder fs-5 mb-2">Vehicle Finder</div>
								<div
									className="border-bottom border-3 button-width-3 rounded mb-5"
								></div>
								<form action="">
									<div className="mb-3 d-flex">
										<div className="d-flex position-relative me-4">
											<input
												type="text"
												name="location"
												placeholder="Location"
												className="button-light px-4 py-3 fw-bolder fs-6 button-width-2 shadow-dark grey"
											/>
											<div className="fa-solid fa-chevron-down icon-arrow-down"></div>
										</div>
										<div className="d-flex position-relative me-4">
											<input
												type="text"
												name="type"
												placeholder="Type"
												className="button-light px-4 py-3 fw-bolder fs-6 button-width-2 shadow-dark grey"
											/>
											<div className="fa-solid fa-chevron-down icon-arrow-down"></div>
										</div>
									</div>
									<div className="d-flex mb-5">
										<div className="d-flex position-relative me-4">
											<input
												type="text"
												name="payment"
												placeholder="Payment"
												className="button-light px-4 py-3 fw-bolder fs-6 button-width-2 shadow-dark grey"
											/>
											<div className="fa-solid fa-chevron-down icon-arrow-down"></div>
										</div>
										<input
											type="date"
											name="date"
											placeholder="Date"
											className="button-light px-4 py-3 fw-bolder fs-6 button-width-2 shadow-dark"
										/>
									</div>
									<button className="button-yellow fw-bolder fs-6 py-3 button-width-4">
                            Explore
									</button>
								</form>
							</div>
						</div>
					</div>
				</header>
				<main>
					<div className="container mt-6">
						<div className="pd-heading mb-4">Popular in town</div>
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
						<div className="pd-heading mb-4">Testimonials</div>
						<div className="d-flex justify-content-between">
							<div className="row">
								<div className="col">
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
								<div className="col">
									<div className="d-flex justify-content-center">
										<div className="d-flex position-relative">
											<div className="img-testimonial img-14"></div>
											<div className="card-name-3">
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
						</div>
					</div>
				</main>
			</LayoutHome>
		)
	}
}