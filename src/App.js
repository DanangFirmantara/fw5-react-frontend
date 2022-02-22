import React, { Component } from 'react'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'


export default class App extends Component{
	state ={
		islogged:false
	}
	componentDidUpdate(){
		console.log(this.state)
		console.log('Login berhasil')
	}
	render(){
		return (
			<React.Fragment>
				<div>
					{!this.state.isLogged && <LoginPage onLogin={(value)=>{this.setState({isLogged: value})}} />}
					{this.state.islogged && <HomePage />}
				</div>
			</React.Fragment>
		)
	}
}