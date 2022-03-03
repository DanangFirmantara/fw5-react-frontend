/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import NavbarHome from './NavbarHome'
import Footer from './Footer'
import { useSelector } from 'react-redux'
import NavbarLogin from './NavbarLogin'

export const LayoutHome = ({children}) => {
	const {auth} = useSelector(state => state)
	return (
		<React.Fragment>
			{auth.token !== null && <NavbarLogin />}
			{auth.token == null && <NavbarHome />}
			{children}
			<Footer />         
		</React.Fragment>
	)
}

// const mapStateToProps = state => ({auth: state.auth})
// const mapDispatchToProps = dispatch => ({dispatch})
// export default connect(mapStateToProps, mapDispatchToProps)(LayoutHome)

export default LayoutHome