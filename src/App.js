/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { unstable_HistoryRouter as HistoryRouter,BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp'
import VehicleType from './pages/VehicleType'
import History from './pages/History'
import About from './pages/About'
import LoginGoogle from './pages/LoginGoogle'
import Profile from './pages/Profile'
import VehicleDetail from './pages/VehicleDetail'
import Reservation from './pages/Reservation'
import Payment from './pages/Payment'
import { createBrowserHistory } from 'history'

export default class App extends Component{
	state ={
		isLogged:false
	}
	componentDidMount(){
		console.log(this.state.isLogged)
	}
	history = createBrowserHistory()

	render(){
		return (
		// <div>
		// 	{this.state.isLogged && <HomePage />}
		// 	{!this.state.isLogged && <LoginPage onLogin={(value)=>{this.setState({isLogged: value})}} />}
		// </div>
			<HistoryRouter history={this.history}>
				{/* <BrowserRouter> */}
				<Routes>
					<Route path='/' element={<HomePage />}/>
					<Route path='login' element={<LoginPage />}/>
					<Route path='loginGoogle' element={<LoginGoogle />}/>
					<Route path='signUp' element={<SignUp />}/>
					<Route path='vehiclesType' element={<VehicleType />}/>
					<Route path='vehiclesType/:id' element={<VehicleDetail history = {this.history} />}/>
					<Route path='reservation' element={<Reservation />}/>
					<Route path='payment' element={<Payment />}/>
					<Route path='history' element={<History />}/>
					<Route path='about' element={<About />}/>
					<Route path='profile' element={<Profile />}/>
				</Routes>
				{/* </BrowserRouter> */}
			</HistoryRouter>
		)
	}
}