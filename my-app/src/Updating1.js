import React, { Component } from 'react'
import Updating2 from './Updating2';
export default class updating1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name1:"Gulam"
      }
    }
    ChangeState =()=>{
        console.log("Button click")
        this.setState({
            name1:"Khan"
        })
    }
  render() {
    return (
      <div>
        <Updating2 name ={this.state.name1}></Updating2>
        <button onClick={this.ChangeState}>Change State</button>
      </div>
    )
  }
}
