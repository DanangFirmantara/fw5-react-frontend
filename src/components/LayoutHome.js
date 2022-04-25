/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import NavbarHome from './NavbarHome'
import Footer from './Footer'

export const LayoutHome = ({children}) => {
	return (
		<React.Fragment>
			<NavbarHome/> 
			{children}
			<Footer />         
		</React.Fragment>
	)
}

export default LayoutHome
