import React, { Component } from 'react'

export default class updating2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name2:this.props.name
      }
    }
    
 static getDerivedStateFromProps(props,state){
console.log("getDerivedStateFromProps")
if(props.name!==state.name2){
return {name2:props.name}
}
return null;
 }

  render() {
    return (
      <div>
        <h2>{this.state.name2}</h2>
      </div>
    )
  }
}
