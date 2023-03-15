import React, { Component } from 'react'

export default class BindingEvent extends Component {
    constructor(){
        super();
       // this.HandleEvent =this.HandleEvent.bind(this)
        this.state ={
            name:"Gulam"
        }
    }

    HandleEvent(){
        console.log("bind",this)
        this.setState ({
            name :"Mehnaj"
        })
    }
    
// HandleEvent=()=>{
//     console.log("bind",this)
//     this.setState ({
//         name :"Mehnaj"
//     })
// }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
          <button type='button' onClick={()=>this.HandleEvent()}>click</button>
        {/* <button type='button' onClick={this.HandleEvent}>click</button> */}
        {/* <button type='button' onClick={this.HandleEvent.bind(this)}>click</button> */}
        {/* <button type='button' onClick={this.HandleEvent}>click</button> */}
      </div>
    )
  }
}
