import React, { Component } from 'react'
import LayoutLogin from '../components/LayoutLogin'

export class Profile extends Component {
	render() {
		return (
			<LayoutLogin>
				<form className="profile-edit">
					<main className="container">
						<div className="mb-5">
							<h5>Profile</h5>
						</div>
						<div className="text-center mb-5">
							<div className="d-inline-block position-relative mb-5">
								<img
									src="/assets/image/image 39.png"
									className="img-thumbnail rounded-circle"
									alt=""
								/>
								<button className="edit-photo">
									<i className="fa-solid fa-pencil"></i>
								</button>
							</div>
							<div className="full-name">
								<h1>Samantha Doe</h1>
							</div>
							<div className="detail">
								<div>samanthadoe@mail.com</div>
								<div>+62833467823</div>
								<div>Has been active since 2013</div>
							</div>
						</div>
						<div className="d-flex justify-content-center algin-items-center">
							<div className="me-5">
								<input type="radio" name="gender" className="radio" />
								<label htmlFor="gender">
									<h6 className="ms-4 margin-bottom-0">Male</h6>
								</label>
							</div>
							<div>
								<input type="radio" name="gender" className="radio" />
								<label htmlFor="gender"
								><h6 className="ms-4 margin-bottom-0">Female</h6></label
								>
							</div>
						</div>
						<div className="mb-5"><h5>Contacts</h5></div>
						<div className="mb-5">
							<label htmlFor="email">Email Address :</label>
							<input
								type="email"
								name="email"
								className="d-block w-100 input-underline"
								value="zulaikha17@gmail.com"
							/>
						</div>
						<div className="mb-5">
							<label htmlFor="address">Address :</label>
							<textarea
								name="address"
								id=""
								cols="30"
								rows="10"
								className="d-block w-100 input-underline align-items-center"
							>
                     Iskandar Street no. 67 Block A Near Bus Stop</textarea
							>
						</div>
						<div className="mb-5">
							<label htmlFor="text">Mobile Number :</label>
							<input
								type="text"
								name="text"
								className="d-block w-100 input-underline"
								value="(+62)813456782"
							/>
						</div>
						<div className="row d-flex justify-content-between mb-5">
							<div className="col-5">
								<label htmlFor="display_name">Display Name :</label>
								<input
									type="text"
									value="Zulaikha"
									className="d-block w-100 input-underline"
								/>
							</div>
							<div className="col-6">
								<label htmlFor="date">DD/MM/YY</label>
								<input
									type="date"
									value="03/09/2003"
									className="d-block w-100 input-underline"
								/>
							</div>
						</div>
						<div className="mb-5">
							<div className="mt-5 d-flex justify-content-between">
								<button className="button-yellow">Save Change</button>
								<button className="button-dark">Edit Password</button>
								<button className="button-grey">Cancel</button>
							</div>
						</div>
					</main>
				</form>
			</LayoutLogin>
		)
	}
}

export default Profile