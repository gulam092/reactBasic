import React, { Component } from 'react'
import Mounting2 from './Mounting2'
export default class Mounting1 extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        name :"Adil"
     }
     console.log("Mounting1 constructor ")
   }
   static getDerivedStateFromProps(props,state){
    
    console.log("getDerivedStateFromProps ")
    console.log(props)
    
    return null;
   }
componentDidMount(){
    console.log("componentDidMount1")
}
   
  render() {
    console.log("Mounting1 render ")

    return (
      <div>
        <h2>{this.state.name}</h2>
        <h2>{this.props.city}</h2>
        <Mounting2 city ="Kanpur"/>
      </div>
    )
  }
}
