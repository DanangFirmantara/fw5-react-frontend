import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import CircularProgress from 'react-cssfx-loading/lib/CircularProgress'


const LoadingScreen = () => {
	const [show, setShow] = useState(true)
	return (
		<>
			<Modal show={show} onHide={()=>setShow(false)} centered dialogClassName='modal-90w'>
				<Modal.Body className='d-flex justify-content-center p-5 bg-fiveth' >
					<div className='d-flex justify-content-center align-items-center flex-column '>
						<CircularProgress className='fs-1 fw-bold' duration='2s' color='#353535' />
						<div className='fs-1 fw-bold'>Please Wait ...</div>
					</div>
				</Modal.Body>
			</Modal>
		</>
		
	)
}

export default LoadingScreen

