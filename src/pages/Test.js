import React, {Component} from 'react'
import Button from '../component/Button'

export default class Test extends Component {
	state = {
		sapa : 'Whats up'
	}
	// const {toggle,setToggle} = React.useState(true)
	render(){
		return (
			<React.Fragment>
				<div className="d-flex justify-content-center align-items-center vh-100">
					<div className="text-center">
						<div className="mb-5">
							<Button sapa={this.state.sapa} />
						</div>
						{/* <div>
                     <Button sapa="Hello" />
                  </div> */}
					</div>
				</div>
			</React.Fragment>
         
		)
	}
}