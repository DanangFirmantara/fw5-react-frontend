/* eslint-disable no-undef */
import axios from 'axios'
import { BACKEND_URL } from '../env'

// const {REACT_APP_BACKEND_URL} = process.env

const http = (token) => {
	const headers = {}
	if(token){
		headers['Authorization'] = `Bearer ${token}`
	}
	return axios.create({
		baseURL : BACKEND_URL,
		headers
	})
}

export default http
