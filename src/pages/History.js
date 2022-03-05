import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import LayoutHome from '../components/LayoutHome'

export const History = () => {
	const auth = useSelector(state=>state.auth)
	return (
		<LayoutHome >
			{!auth.token && <Navigate to='/login' />}
			<main>
				<div className="container my-5">
					<div className="row d-flex justify-content-between g-0">
						<div className="col">
							<div className="row g-0 mb-4">
								<div className="d-flex position-relative col">
									<div className="w-100 border border-3 border-grey bg-grey text-muted rounded py-3 px-5 fs-4">
										Search History
									</div>
									<a
										href="/vehicle-detail.html"
										className="fa-solid fa-magnifying-glass icon position-absolute icon-search text-dark"
									></a>
								</div>
								<div className="col-2 d-flex justify-content-center pt-1">
									<div className="d-inline-block text-center">
										<div className="fs-4">Select</div>
										<div className="d-flex position-relative justify-content-center">
											<div
												className="border border-3 border-grey icon-check position-absolute"
											></div>
										</div>
									</div>
								</div>
							</div>
							<div
								className="border border-3 border-grey bg-grey text-muted ps-5 py-3 rounded fs-4 w-25 mb-5"
							>
								<div className="d-flex justify-content-between align-items-center">
									Filter
									<div className="fa-solid fa-chevron-down pe-4 fs-3"></div>
								</div>
							</div>
							<div className="row">
								<div className="col">
									<div
										className="border-bottom border-1 py-3 fw-normal-bold fs-4 d-flex justify-content-between align-items-center"
									>
										<div className="">
											Please finish your payment for vespa for Vespa Rental Jogja
										</div>
										<div className="fa-solid fa-chevron-right"></div>
									</div>
								</div>
								<div
									className="col-2 d-flex align-items-center justify-content-center"
								>
									<div className="border border-3 border-grey icon-check"></div>
								</div>
							</div>
							<div className="row mb-5">
								<div className="col">
									<div
										className="border-bottom border-1 py-3 fw-normal-bold fs-4 d-flex justify-content-between align-items-center"
									>
										<div className="">Your payment has been confirmed!</div>
										<div className="fa-solid fa-chevron-right"></div>
									</div>
								</div>
								<div
									className="col-2 d-flex align-items-center justify-content-center"
								>
									<div className="border border-3 border-grey icon-check"></div>
								</div>
							</div>
							<div className="grey-2 fs-4 fw-normal-bold mb-5">A week ago</div>
							<div className="row mb-5">
								<div className="col d-flex justify-content-star">
									<div className="img-slide img-7 rounded"></div>
									<div className="d-inline-block py-3 px-4 align-items-center">
										<div className="fs-6 fw-bold">Vespa Matic</div>
										<div className="fs-6 fw-light mb-3">Jan 18 to 21 20221</div>
										<div className="fs-6 fw-bold">Prepayment : Rp.245.000</div>
										<div className="fs-6 green">Has been returned</div>
									</div>
								</div>
								<div
									className="col-2 d-flex align-items-center justify-content-center"
								>
									<div className="border border-3 border-grey icon-check"></div>
								</div>
							</div>
							<div className="row mb-5">
								<div className="col d-flex justify-content-star">
									<div className="img-slide img-8 rounded"></div>
									<div className="d-inline-block py-3 px-4 align-items-center">
										<div className="fs-6 fw-bold">Vespa Matic</div>
										<div className="fs-6 fw-light mb-3">Jan 18 to 21 20221</div>
										<div className="fs-6 fw-bold">Prepayment : Rp.245.000</div>
										<div className="fs-6 green">Has been returned</div>
									</div>
								</div>
								<div
									className="col-2 d-flex align-items-center justify-content-center"
								>
									<div className="border border-3 border-grey icon-check"></div>
								</div>
							</div>
							<div className="row mb-5">
								<div className="col d-flex justify-content-star">
									<div className="img-slide img-9 rounded"></div>
									<div className="d-inline-block py-3 px-4 align-items-center">
										<div className="fs-6 fw-bold">Bike</div>
										<div className="fs-6 fw-light mb-3">Jan 18 to 21 20221</div>
										<div className="fs-6 fw-bold">Prepayment : Rp.100.000</div>
										<div className="fs-6 green">Has been returned</div>
									</div>
								</div>
								<div
									className="col-2 d-flex align-items-center justify-content-center"
								>
									<div className="border border-3 border-grey icon-check"></div>
								</div>
							</div>
						</div>
						<div className="col-3 text-center">
							<div
								className="px-4 py-3 d-flex justify-content-center flex-column border border-3 border-grey rounded"
							>
								<div className="text-center pd-heading fw-bolder fs-4 py-5">
									New Arrival
								</div>
								<div className="position-relative d-flex mb-4">
									<div className="img-scroll rounded img-5"></div>
									<div className="card-name-2">
										<div>Lamborghini</div>
										<div className="text-muted">South Jakarta</div>
									</div>
								</div>
								<div className="position-relative d-flex mb-5">
									<div className="img-scroll rounded img-6"></div>
									<div className="card-name-2">
										<div>White Jeep</div>
										<div className="text-muted">Kalimantan</div>
									</div>
								</div>

								<div className="">
									<a href="" className="fs-4 text-muted">View more</a>
								</div>
								<div className="fa-solid fa-chevron-down fs-1"></div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</LayoutHome>
	)
}


export default History