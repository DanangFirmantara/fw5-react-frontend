import React, { Component } from 'react'
import logo from '../assets/image/logo.png'
import { Link } from 'react-router-dom'

export default class Footer extends Component{
	
	render(){
		return (
			<React.Fragment>
				<footer className="bg-primer container-fluid g-0">
					<div className="container">
						<div className="pt-6">
							<div className="row d-lg-flex justify-content-between row-cols-1 row-cols-lg-12 mb-lg-5 mb-3">
								<div className="col-lg-5 col text-center text-lg-start mb-4 mb-lg-0">
									<Link to='/'>
										<div className="mb-5 "><img src={logo} alt="logo" className="brand" /></div>
									</Link>
									<div className="mb-3">
										<h5 className="mulish mulish-normal fourth">Plan and book your perfect trip with <br/>expert advice, travel tips for vehicle <br/>
                              information from us
										</h5>
									</div>
									<div>
										<h5 className="mulish mulish-normal fourth">©2020 Vehicle Rental Center. All rights reserved</h5>
									</div>
								</div>
								<div className="col col-lg-2 text-center text-lg-start ">
									<h4 className="mulish second">Destinations</h4>
									<ul className="fourth">
										<li>Bali</li>
										<li>Yogyakarta</li>
										<li>Jakarta</li>
										<li>Kalimantan</li>
										<li>Malang</li>
									</ul>
								</div>
								<div className="col col-lg-2 text-center text-lg-start">
									<h4 className="mulish second">Vehicle</h4>
									<ul className="fourth">
										<li>Bike </li>
										<li>Car </li>
										<li>Motorbike </li>
										<li>Return Times</li>
										<li>FAQs</li>
									</ul>
								</div>
								<div className="col col-lg-3 text-center text-lg-start">
									<h4 className="mulish second">Interest</h4>
									<ul className="fourth ">
										<li>Adventure Travel</li>
										<li>Art and Culture</li>
										<li>Wildlife and Nature</li>
										<li>Family Holdays</li>
										<li>Culinary Trip</li>
									</ul>
								</div>
							</div>
							<div className="underline w-100"></div>
							<div className="d-flex justify-content-center py-5 fs-2 second">
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