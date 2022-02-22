import React, {Component} from 'react'

export class Number extends Component{
	state = {
		angka : 1
	}
	ubahAngka = ()=>{
		this.setState()
	}
	componentDidUpdate(){
		console.log('komponen berhasil di update')
	}
	componentDidMount(){
		console.log('komponen berhasil ditampilkan')
	}
	componentWillUnmount(){
		console.log('komponen berhasil dihapus')
	}
	render(){
		return (
			<div>
				<div>{this.state.angka}</div>
				<button onClick={this.ubahAngka}>Ubah</button>
			</div>
         
         
		)
	}
}

export default Number