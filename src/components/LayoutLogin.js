/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import Footer from './Footer'
import NavbarLogin from './NavbarLogin'

export default class LayoutLogin extends Component {
	render() {
		return (
			<>
				<NavbarLogin />
				{this.props.children}
				<Footer/>
			</>
		)
	}
}
