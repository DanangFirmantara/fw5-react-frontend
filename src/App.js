/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'

export default class App extends Component{
	state ={
		isLogged:false
	}
	componentDidUpdate(){
		if(!this.isLogged){
			console.log('Login Gagal')
		} else{
			console.log('Login Berhasil')
		}
	}
	componentDidMount(){
		console.log(this.state.isLogged)
	}
	render(){
		return (
			<div>
				{this.state.isLogged && <HomePage />}
				{!this.state.isLogged && <LoginPage onLogin={(value)=>{this.setState({isLogged: value})}} />}
			</div>
			
		)
	}
}