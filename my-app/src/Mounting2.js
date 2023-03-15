import React, { Component } from 'react'

export default class Mounting2 extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        name :"Kumar"
     }
     console.log("Mounting2 constructor ")
   }
   static getDerivedStateFromProps(props,state){
    
    console.log("getDerivedStateFromProps ")
    console.log(props)
    
    return null;
   }
componentDidMount(){
    console.log("componentDidMount2")
}
   
  render() {
    console.log("Mounting2 render ")

    return (
      <div>
        <h2>{this.state.name}</h2>
        <h2>{this.props.city}</h2>
      </div>
    )
  }
}
