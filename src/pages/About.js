import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import LayoutHome from '../components/LayoutHome'
import { doResetVehicle } from '../redux/actions/vehicle'

const About = () => {
	const dispatch = useDispatch()

	const onResetVehicle = ()=>{
		dispatch( doResetVehicle())
	}
	return (
		<LayoutHome>
			<div className='d-flex align-items-center justify-content-center vh-100'>
				<div className='fs-1'>Sorry This Page on Process</div>
				<Button onClick={onResetVehicle}>Reset vehicle</Button>
			</div>
		</LayoutHome>
	)
}

export default About
