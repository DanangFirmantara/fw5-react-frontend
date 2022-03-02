/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

export const Arrow = ({children, variant='dark', className ,...rest}) => {
	const goBack = ()=>{
		window.history.back()
	}
	return (
		<>
			<div className={`d-flex align-items-center ${className}`}>
				<button className={`fa-solid fa-chevron-left icon fs-1 me-5 ${variant}`} {...rest} onClick={goBack}></button>
				<div className={`fs-1 fw-bold ${variant}`}>{children}</div>
			</div></>
		
	)
}

Arrow.propTypes = {
	children: PropTypes.string.isRequired,
	variant: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired
}

export default Arrow