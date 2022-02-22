import React from "react";

export class Number extends React.Component{
   state = {
      angka : 1
   }
   ubahAngka = ()=>{
      this.setState()
   }
   componentDidUpdate(){
      console.log("komponen berhasil di update")
   }
   componentDidMount(){
      console.log("komponen berhasil ditapilkan")
   }
   componentWillUnmount(){
      console.log("komponen berhasil dihapus")
   }
   render(){
      return (
         <div>
            {this.props.angka}
            <div>{this.state.angka}</div>
            <button onClick={this.ubahAngka}>Ubah</button>
         </div>
         
         
      )
   }
}

export default Number