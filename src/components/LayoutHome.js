/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import NavbarHome from './NavbarHome'
import Footer from './Footer'

export default class LayoutHome extends Component {
	render() {
		return (
			<React.Fragment>
				<NavbarHome />
				{this.props.children}
				<Footer />         
			</React.Fragment>
		)
	}
}
