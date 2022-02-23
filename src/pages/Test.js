import React, {Component} from 'react'
// import Button from '../component/Button'

export default class Test extends Component {
	state = {
		sapa : 'Whats up'
	}
	// const {toggle,setToggle} = React.useState(true)
	render(){
		return (
			<React.Fragment>
				{/* <div className="d-flex justify-content-center align-items-center vh-100"> */}
				{/* <div className="text-center"> */}
				{/* <div className="mb-5">
							<Button sapa={this.state.sapa} />
						</div> */}
				<div className='container vh-100 '>
					
					{/* <div className='row row-cols-1 mx-3 mx-sm-0 row-cols-sm-2 row-cols-md-4 g-0'>
						<div className='d-flex flex-column-reverse flex-sm-column bd-higlight'>
							<div className='col border border-2 border text-center '>Col 1 of 6</div>
							<div className='col border border-2 border text-center'>Col 2 of 6</div>
							<div className='col border border-2 border text-center'>Col 3 of 6</div>
							<div className='col border border-2 border text-center'>Col 4 of 6</div>
						</div>
					</div> */}

					<div className="float-start">Float start on all viewport sizes</div><br/>
					<div className="float-end float-sm-none">Float end on all viewport sizes</div><br/>
					<div className="float-none">Dont float on all viewport sizes</div>
					<div className='img-1 img-thumbnail mx-auto mx-md-0'></div>
					{/* <div className='row row-cols-1 mx-3 mx-sm-0 row-cols-sm-2 row-cols-md-4 g-0'>
						
						<div className='col-sm-3 border border-2 border text-center '>Level 1: .col-sm-3</div>
						<div className='col-sm-9 border border-2 border text-center'>
							<div className='row'>
								<div className='col'>Level 2: col</div>
								<div className='col'>Level 2: col</div>
							</div>
						</div>
						
					</div> */}
					
				</div>
					
						
				{/* <div>
                     <Button sapa="Hello" />
                  </div> */}
				{/* </div> */}
				{/* </div> */}
			</React.Fragment>
         
		)
	}
}