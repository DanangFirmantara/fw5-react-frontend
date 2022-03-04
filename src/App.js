import React, { useEffect } from 'react'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import { unstable_HistoryRouter as HistoryRouter, Route, Routes } from 'react-router-dom'
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
import VehicleEdit from './pages/VehicleEdit'
import VehicleCreate from './pages/VehicleCreate'
import ForgotPassword from './pages/ForgotPassword'
import { useDispatch} from 'react-redux'
import { getDataUser } from './redux/actions/auth'


export const App = () => {
	const history = createBrowserHistory({window})
	const dispatch = useDispatch()

	useEffect(()=>{
		const token = window.localStorage.getItem('token')
		if(token){
			dispatch({
				type : 'AUTH_LOGIN_FULFILLED',
				payload : {
					data :{
						results : token
					}
				}
			})
			dispatch(getDataUser(token))
		}
	},[])

	return (
		<HistoryRouter history={history}>
			<Routes>
				<Route path='/' element={<HomePage />}/>
				<Route path='login' element={<LoginPage />}/>
				<Route path='loginGoogle' element={<LoginGoogle />}/>
				<Route path='signUp' element={<SignUp />}/>
				<Route path='forgotPassword' element={<ForgotPassword />}/>
				<Route path='vehiclesType' element={<VehicleType />}/>
				<Route path='vehiclesType/:id' element={<VehicleDetail history = {history} />}/>
				<Route path='reservation' element={<Reservation />}/>
				<Route path='payment' element={<Payment />}/>
				<Route path='history' element={<History />}/>
				<Route path='about' element={<About />}/>
				<Route path='profile' element={<Profile />}/>
				<Route path='vehicle' element={<VehicleCreate />}/>
				<Route path='vehicle/:id' element={<VehicleEdit />}/>
			</Routes>
		</HistoryRouter>
	)
}

export default App
