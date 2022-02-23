/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp'
import VehicleType from './pages/VehicleType'
import History from './pages/History'
import About from './pages/About'
import LoginGoogle from './pages/LoginGoogle'

export default class App extends Component{
	state ={
		isLogged:false
	}
	componentDidMount(){
		console.log(this.state.isLogged)
	}
	render(){
		return (
		// <div>
		// 	{this.state.isLogged && <HomePage />}
		// 	{!this.state.isLogged && <LoginPage onLogin={(value)=>{this.setState({isLogged: value})}} />}
		// </div>

			
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<HomePage />}/>
					<Route path='login' element={<LoginPage />}/>
					<Route path='loginGoogle' element={<LoginGoogle />}/>
					<Route path='signUp' element={<SignUp />}/>
					<Route path='vehiclesType' element={<VehicleType />}/>
					<Route path='history' element={<History />}/>
					<Route path='about' element={<About />}/>
				</Routes>
			</BrowserRouter>
		)
	}
}