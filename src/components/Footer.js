import React, { Component } from 'react'
import logo from '../assets/image/logo.png'

export default class Footer extends Component{
	
	render(){
		return (
			<React.Fragment>
				<footer className="grey container-fluid g-0">
					<div className="container">
						<div className="pt-6">
							<div className="row d-flex justify-content-between mb-6">
								<div className="col-5">
									<div className="mb-5"><img src={logo} alt="logo" className="brand" /></div>
									<div className="mb-3">
										<h5 className="mulish mulish-normal text-muted">Plan and book your perfect trip with <br/>expert advice, travel tips for vehicle <br/>
                              information from us
										</h5>
									</div>
									<div>
										<h5 className="mulish mulish-normal text-muted">©2020 Vehicle Rental Center. All rights reserved</h5>
									</div>
								</div>
								<div className="col">
									<h4 className="mulish text-muted">Destinations</h4>
									<ul className="text-muted">
										<li>Bali</li>
										<li>Yogyakarta</li>
										<li>Jakarta</li>
										<li>Kalimantan</li>
										<li>Malang</li>
									</ul>
								</div>
								<div className="col">
									<h4 className="mulish text-muted">Vehicle</h4>
									<ul className="text-muted">
										<li>Bike </li>
										<li>Car </li>
										<li>Motorbike </li>
										<li>Return Times</li>
										<li>FAQs</li>
									</ul>
								</div>
								<div className="col">
									<h4 className="mulish text-muted">Interest</h4>
									<ul className="text-muted">
										<li>Adventure Travel</li>
										<li>Art and Culture</li>
										<li>Wildlife and Nature</li>
										<li>Family Holdays</li>
										<li>Culinary Trip</li>
									</ul>
								</div>
							</div>
							<div className="underline w-100"></div>
							<div className="d-flex justify-content-center py-5 fs-2 dark">
								<i className="fa-brands fa-twitter mx-3"></i>
								<i className="fa-brands fa-facebook-f mx-3"></i>
								<i className="fa-brands fa-instagram mx-3"></i>
								<i className="fa-brands fa-linkedin-in mx-3"></i>
								<i className="fa-brands fa-youtube mx-3"></i>
							</div>
						</div>
					</div>  
				</footer>
			</React.Fragment>
			
		)
	}
}