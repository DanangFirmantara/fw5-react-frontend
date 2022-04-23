import React, {Component} from 'react'

export class Button extends Component {
   state ={
      name : 'Hendri',
      num : 0
   }
   changeName = ()=>{
      this.setState({
         name : 'Danang'
      })
   }
   changeNum = (obj) =>{
      console.log(obj)
      if(obj ==='plus'){
         this.setState({
            num : this.state.num + 1
         })
      } else {
         this.setState({
            num : this.state.num - 1
         })
      }
   }

   increament = () =>{
      this.setState({
         num : this.state.num + 1
      })
   }

   decreament = () =>{
      if(this.state.num > 0){
         this.setState({
            num : this.state.num - 1
         })
      }
   }

   componentDidMount(){
      console.log('Button show')
   }
   componentDidUpdate(){
      console.log('Button update')
   }
   componentWillUnmount(){
      console.log('button unmount')
   }
   render(){
      return(
         <React.Fragment>
            <div >
               {/* <div>{this.props.sapa} {this.state.name}</div> */}
               <button onClick={this.changeName}> Change </button>
            </div>
            <div>
               <button onClick={this.decreament}>-</button>
               <div>{this.state.num}</div>
               <button onClick={this.increament}>+</button>
            </div>
         </React.Fragment>
         
      )
   }
}

export default Button