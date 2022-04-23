/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import Footer from './Footer'
import NavbarHome from './NavbarHome'
// import NavbarLogin from './NavbarLogin'

export default class LayoutLogin extends Component {
   render() {
      return (
         <>
            {/* <NavbarLogin /> */}
            <NavbarHome/>
            {this.props.children}
            <Footer/>
         </>
      )
   }
}
