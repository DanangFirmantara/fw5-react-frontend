/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { getNextData } from '../redux/actions/vehicle'

const Pagination = ({totalPage = 5, pageInfo, activePage = 1}) => {
	const [page,setPage] = useState(activePage)
	const dispatch = useDispatch()

	const onPage = (e,i) =>{
		e.preventDefault()
		setPage(i)
		console.log(i)
		if(i !== pageInfo.currentPage){
			if(i === pageInfo.currentPage+1){
				console.log(pageInfo.next)
				if(pageInfo.next !== null){
					console.log(pageInfo.next)
					return dispatch(getNextData(pageInfo.next))
				}
			} else if(i === pageInfo.currentPage-1){
				if(pageInfo.prev !== null){
					console.log(pageInfo.prev)
					return dispatch(getNextData(pageInfo.prev))
				}
			} else {
				if(pageInfo.next !== null){
					const url = pageInfo.next.replace(`page=${pageInfo.currentPage+1}`, `page=${i}`)
					console.log(pageInfo.next.replace(`page=${pageInfo.currentPage+1}`, `page=${i}`))
					dispatch(getNextData(url))	
				} else if(pageInfo.prev !== null){
					const url = pageInfo.prev.replace(`page=${pageInfo.currentPage-1}`, `page=${i}`)
					console.log(pageInfo.prev.replace(`page=${pageInfo.currentPage-1}`, `page=${i}`))
					dispatch(getNextData(url))
				}
			}
		}
	}
	return (
		<div className='d-flex justify-content-center'>
			{[...Array(totalPage)].map((o,i) =>{
				return (
					<Button key={String(i)} variant={i+1 === page ? 'secondary' : 'outline-secondary'} onClick={(e) => onPage(e, i+1)} className='mx-2'>
						{i+1}
					</Button>
				)
			})}
		</div>
	)
}

export default Pagination
