import React, { Component } from 'react'
import LayoutLogin from '../components/LayoutLogin'
import { Link } from 'react-router-dom'

export class Payment extends Component {
	render() {
		return (
			<LayoutLogin>
				<main>
					<div className="container">
						<div className="d-flex align-items-center mb-5" href="./vehicle-type.html">
							<Link className="fa-solid fa-chevron-left icon dark fs-0 me-3" to="../reservation"></Link>
							<div className="fs-1 fw-bold text-dark">Payment</div>
						</div>
						<div className="row mb-5">
							<div className="col-5">
								<div className="img-banner-3 img-12 rounded mb-4"></div>
								<div className="border border-3 py-4 border-grey rounded mb-4 ">
									<div className="fw-bold fs-4 ps-5">Quantity : 2 bikes</div>
								</div>
								<div className="border border-3 py-4 border-grey rounded ">
									<div className="fw-bolder fs-4 ps-5">Order details :</div>
									<div className="ps-5 fs-4">1 bike : Rp. 78.000</div>
									<div className="ps-5 fs-4">1 bike : Rp. 78.000</div>
									<div className="fw-bolder fs-4 ps-5 mt-3">Total : 178.000</div>
								</div>
							</div>
							<div className="col">
								<div className="pd-bolder">Fixie - Gray Only</div>
								<div className="pd-heading fw-light fs-1 mb-3">Yogyakarta</div>
								<div className="grey-2 fw-bold fs-4 mb-3">No Prepayment</div>
								<div className="pd-heading fs-1 mb-3">#FG1209878YZS</div>
								<button className="button-yellow fw-bold fs-4 p-1 mb-4">
									<div className="px-2">Copy booking code</div>
								</button>
								<div className="border border-3 py-4 border-grey rounded mb-4 ">
									<div className="d-flex justify-content-between">
										<div className="fw-bold fs-4 ps-5">
                     Reservation Date :
										</div>
										<div className="dark fs-4 pe-6">Jan 18 2021</div>
									</div>
								</div>
								<div className="border border-3 py-4 border-grey rounded ">
									<div className="fw-bolder fs-4 ps-5">Identity :</div>
									<div className="ps-5 fs-4">Samantha Doe (+6290987682)</div>
									<div className="ps-5 fs-4">samanthadoe@mail.com</div>
								</div>
							</div>
						</div>
						<div className="row d-flex justify-content-between align-items-center mb-6">
							<div className="col-3"> 
								<div className="fw-bold fs-2 ">Payment code :</div>  
							</div>
							<div className="col">
								<div className="border border-grey border-3 fs-4 fw-bold d-flex justify-content-between py-4 rounded d-flex align-items-center px-5">
									<div className="">#FG1209878YZS</div>
									<div className="button-dark px-4"> Copy</div>
								</div>
							</div>
							<div className="col-4">
								<div className="border border-grey border-3 fs-4 fw-bold px-5 py-4 d-flex justify-content-between align-items-center rounded">
									<div className="grey-2">Select payment method</div>
									<div className="fa-solid fa-chevron-down"></div>
								</div>
							</div>
						</div>
						<Link to="../history">
							<div className="button-yellow shadow-yellow py-4 d-flex justify-content-center fw-bolder fs-4">
								<div className="fw-bolder">Finish payment :</div>
								<div className="text-danger fw-bolder">59:30</div>
							</div>
						</Link>
					</div>
				</main>
			</LayoutLogin>
		)
	}
}

export default Payment