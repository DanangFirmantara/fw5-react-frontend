/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import LayoutHome from '../components/LayoutHome'
import defaultImage from '../assets/image/image 6.png'
import LoadingScreen from '../components/LoadingScreen'
import moment from 'moment'
import { doPayment } from '../redux/actions/payment'

export const Payment = () => {
	const payment = useSelector(state => state.payment)
	const reservation = useSelector(state=>state.reservation)
	const auth = useSelector(state=>state.auth)

	const navigate = useNavigate()
	const dispatch = useDispatch()

	const onPayment = () =>{
		console.log('bayar gan')
		const id = payment.data.id
		const total = payment.data.total
		const codePayment = payment.data.codePayment
		const dataPayment = {id, total, codePayment}
		dispatch( doPayment(dataPayment, auth.token))
		navigate('/History')
	}
	const goBack = ()=>{
		window.history.back()
	}
	return (
		<LayoutHome >
			{reservation.isLoading ? (
				<LoadingScreen/>
			): (
				<main>
					<div className="container my-5">
						<div className="d-flex align-items-center mb-5" >
							<button onClick={goBack} className="fa-solid fa-chevron-left icon dark fs-0 me-3" to="/reservation"></button>
							<div className="fs-1 fw-bold text-dark">Payment</div>
						</div>
						{payment.successMsg !== '' && (
							<div className="alert button-third shadow-dark alert-dismissible fade show text-center fs-5 fw-bold mb-4" role="alert">
								{payment.successMsg}
								<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
							</div>
						)
						}
						<div className='row justify-content-around'>
							<div className='col-5'>
								<img src={payment.data?.image || defaultImage} alt={payment.data?.vehicleName} className='img-banner-5 rounded d-none d-lg-flex'></img>
							</div>
							<div className='col-6'>
								<div>
									<div className="pd-bolder">{payment.data?.vehicleName}</div>
								</div>
								<div>
									<div className="pd-heading fw-light fs-1 mb-3">{payment.data?.vehicleLocation}</div>
								</div>
								<div>
									<div className="grey-2 fw-bold fs-4 mb-3">{payment.data?.payment}</div>
								</div>
								<div>
									<div className="pd-heading fs-1 mb-3">{payment.data?.bookedCode}</div>
								</div>
								<div>
									<button className="button-third fw-bold fs-4 p-1 mb-4">
										<div className="px-2">Copy booking code</div>
									</button>
								</div>
							</div>
						</div>
						<div className='row justify-content-around'>
							<div className='col-5 border border-3 py-4 border-grey rounded mb-4'>
								<div className='mx-4 d-flex align-items-center'>
									<div className='fw-bold fs-5'>Quantity : <span className='fw-normal'>{payment.data?.quantity} {payment.data?.vehicleCategory}</span> </div>
								</div>
							</div>
							<div className='col-6 border border-3 py-4 border-grey rounded mb-4 '>
								<div className='d-flex align-items-center mx-4'>
									<div className='fw-bold fs-5'>
								Reservation Date : <span className='fw-normal'>{moment(payment.data?.rentStartDate).format('ll')} to {moment(payment.data?.rentEndDate).format('ll')}</span> 
									</div>
								</div>
							</div>
						</div>
						<div className='row justify-content-around'>
							<div className='col-5 border border-3 py-4 border-grey rounded mb-4'>
								<div className='d-flex align-items-center'>
									<div className='mx-4 '>
										<div className="fw-bolder fs-4">Order details :</div>
										<div className="fs-4"> {payment.data?.quantity} {payment.data?.vehicleCategory} : Rp. {new Intl.NumberFormat('de-DE').format(payment.data?.total)}</div>
										<div className="fw-bolder fs-4 mt-3">Total : {new Intl.NumberFormat('de-DE').format(payment.data?.total)}</div>
									</div>
								</div>
							</div>
							<div className='col-6 border border-3 py-4 border-grey rounded mb-4'>
								<div className='d-flex align-items-center'>
									<div className='mx-4'>
										<div className="fw-bolder fs-4">Identity :</div>
										<div className="fs-4">{payment.data?.name} {payment.data?.lastName} ({payment.data?.contact})</div>
										<div className="fs-4">{payment.data?.email} </div>
									</div>
								</div>
							</div>
						</div>
						<div className='row justify-content-around'>
							<div className='col-3 py-4'>
								<div className='d-flex align-items-center'>
									<div className='fw-bold fs-4'>Payment Code :</div>
								</div>
							</div>
							<div className='col-4 border border-3 py-4 border-grey rounded mb-4'>
								<div className='d-flex position-relative align-items-center mx-3'> 
									<div className='fw-bold fs-4'>{payment.data?.codePayment}</div>
									<div className='button-fourth py-2 position-absolute end-0 px-5 fs-4'>copy</div>
								</div>
							</div>
							<div className='col-4 border border-3 py-4 border-grey rounded mb-4'>
								<div className='d-flex align-items-center mx-3 position-relative'>
									<div className='fs-4'>Select method payment</div>
									<div className='fa-solid fa-chevron-down fs-2 position-absolute end-0'></div>
								</div>
							</div>
						</div>
						<button onClick={onPayment} className="button-third shadow-yellow py-4 d-flex justify-content-center fw-bolder fs-4 w-100">
							<div className="fw-bolder me-3">Finish payment :</div>
							<div className="text-danger fw-bolder">59:30</div>
						</button>
					</div>
				</main>
			)}
			
		</LayoutHome>
	)
}

export default Payment
