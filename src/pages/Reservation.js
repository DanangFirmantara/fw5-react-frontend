import React, { Component } from 'react'
import LayoutLogin from '../components/LayoutLogin'
import { Link } from 'react-router-dom'

export class Reservation extends Component {
	render() {
		return (
			<LayoutLogin>
				<div className="container">
					<div className="d-flex align-items-center mb-5" href="./vehicle-type.html">
						<Link
							className="fa-solid fa-chevron-left icon dark fs-0 me-3"
							to="../vehicleDetail"
						></Link>
						<div className="fs-1 fw-bold text-dark">Reservation</div>
					</div>
					<div className="row mb-5">
						<div className="col-7">
							<div className="pe-5">
								<div className="img-banner img-12 rounded"></div>
							</div>
						</div>
						<div className="col move-1">
							<div className="pd-bolder">Fixie - Gray Only</div>
							<div className="pd-bolder fs-1 fw-light mb-3">Yogyakarta</div>
							<div
								className="w-100 border border-3 border-grey rounded p-3 lh-base shadow mb-4"
							>
								<div className="px-4">
									<div className="fs-4">Qt : 2 bikes</div>
									<div className="fs-4 text-muted fw-bold">No Prepayment</div>
								</div>
							</div>
							<div
								className="w-100 border border-3 border-grey rounded p-3 lh-base shadow"
							>
								<div className="px-4">
									<div className="fw-bold fs-4">Details:</div>
									<div className="fs-4">1 bike : Rp. 78.000</div>
									<div className="fs-4">1 bike : Rp. 78.000</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row justify-content-between align-items-center mb-5">
						<div className="col">
							<div className="fs-1 fw-bold">Reservation :</div>
						</div>
						<div className="col-4">
							<div
								className="border border-5 w-100 rounded border-grey fs-4 text-center shadow p-4 fw-bold text-muted"
							>
            Start Date
							</div>
						</div>
						<div className="col-4">
							<div
								className="border border-5 w-100 rounded border-grey fs-4 text-center shadow p-4 fw-bold text-muted"
							>
            Return Date
							</div>
						</div>
					</div>
					<div
						className="border border-5 w-100 p-4 text-center rounded border-grey pd-heading shadow mb-4"
					>
        Total : Rp. 178.000
					</div>
					<Link to="../payment">
						<div
							className="button-yellow text-center w-100 shadow-yellow p-4 fw-bolder fs-4 mb-4"
						>
          Go To Payment
						</div>
					</Link>
				</div>
			</LayoutLogin>
		)
	}
}

export default Reservation