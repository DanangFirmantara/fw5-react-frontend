/* eslint-disable react/prop-types */
import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import LayoutHome from '../components/LayoutHome'
import { getHistoryUser } from '../redux/actions/history'
import defaultImage from '../assets/image/image 6.png'
import moment from 'moment'
import {BiTrash} from 'react-icons/bi'
import { Modal } from 'react-bootstrap'
import { getHistoryDetail } from '../redux/actions/payment'
import LoadingScreen from '../components/LoadingScreen'

export const History = () => {
	const [deleted,setDeleted] = useState(false)
	const [idDeleted, setIdDeleted] = useState()
	const [modalShow, setModalShow] = useState(false)

	const auth = useSelector(state=>state.auth)
	const history = useSelector(state=>state.history)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	useEffect(()=>{
		dispatch( getHistoryUser(auth.token))
	},[dispatch])

	const statusVehicle = (quantity)=>{
		if(quantity === 1){
			return 'Paid'
		} else{
			return 'has not been paid'
		}
	}

	const doDelete = (id) =>{
		setModalShow(true)
		setIdDeleted(id)
		console.log(`delete history ${id}`)
	}

	const deletedHistory = ()=>{
		console.log(`deleted history id ${idDeleted}`)
	}

	const detailHistory = (id)=>{
		console.log(id)
		dispatch( getHistoryDetail(id, auth.token))
		navigate('/Payment')
	}

	return (
		<LayoutHome >
			{!auth.token && <Navigate to='/login' />}
			{history.isLoading ? (
				<LoadingScreen />
			): (
				<main>
					<Modal
						show={modalShow}
						onHide={()=>setModalShow(false)}
						size="lg"
						aria-labelledby="contained-modal-title-vcenter"
						centered
					>
						<Modal.Body closeButton>
							<div className={'fs-4 text-center fw-bold my-5'}>Are you sure do you want to delete selected item?</div>
							<div className='d-flex justify-content-around my-5'>
								<button className='button-third fw-bold w-25 fs-3 py-2' onClick={deletedHistory}>Yes</button>
								<button className='button-second fw-bold w-25 fs-3 py-2' onClick={()=>setModalShow(false)}>No</button>
							</div>
						</Modal.Body>
					</Modal>
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
									className="border border-3 border-grey bg-grey text-muted ps-5 py-3 rounded fs-4 w-25 mb-5">
									<div className="d-flex justify-content-between align-items-center">
									Filter
										<div className="fa-solid fa-chevron-down pe-4 fs-3"></div>
									</div>
								</div>
								<div className="row">
									<div className="col">
										<div className="border-bottom border-1 py-3 fw-normal-bold fs-4 d-flex justify-content-between align-items-center">
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
										<div className="border-bottom border-1 py-3 fw-normal-bold fs-4 d-flex justify-content-between align-items-center">
											<div className="">Your payment has been confirmed!</div>
											<div className="fa-solid fa-chevron-right"></div>
										</div>
									</div>
									<div className="col-2 d-flex align-items-center justify-content-center">
										<div className="border border-3 border-grey icon-check"></div>
									</div>
								</div>
								<div className='row mb-5'>
									<div className='col d-flex align-items-center'>
										<div className="grey-2 fs-4 fw-normal-bold">A week ago</div>
									</div>
									<div className='col-2 d-flex justify-content-center align-items-center'>
										<button className={deleted ? 'bg-second rounded-2 border-0 p-2' : 'bg-white rounded-2 border-0 p-2'} onClick={()=>setDeleted(!deleted)}>
											<BiTrash className='fs-2 '/>
										</button>
									</div>
								
								</div>
								{history.data.length > 0 && history.data.map((obj)=>{
									return(
										<div className="row mb-5" key={String(obj.id)}>
											<div className="col d-flex justify-content-start" onClick={()=>detailHistory(obj.id)} style={{cursor : 'pointer'}}>
												<img src={obj?.image || defaultImage} alt={obj?.vehicleName} className='img-slide rounded'></img>
												<div className="d-inline-block py-3 px-4 align-items-center">
													<div className="fs-6 fw-bold">{obj.vehicleName}</div>
													<div className="fs-6 fw-light mb-3">{moment(obj.rentStartDate).format('ll') } to {moment(obj.rentEndDate).format('lll')}</div>
													<div className="fs-6 fw-bold">Payment : Rp. {new Intl.NumberFormat('de-DE').format(obj.total)}</div>
													<div className={obj.status === 1 ? 'fs-6 green' : 'fs-6 text-danger'}>{statusVehicle(obj.status)}</div>
												</div>
											</div>
											<div
												className="col-2 d-flex align-items-center justify-content-center"
											>
												{deleted && (
													<button className='button-third shadow-yellow py-3 d-flex justify-content-center fw-bold px-4 fs-4 me-3' onClick={()=>doDelete(obj.id)}>Delete</button>
												)}
											</div>
										</div>
									)
								})}
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
			)}
			
		</LayoutHome>
	)
}


export default History
