import React, { Component } from 'react'

export default class Employee extends Component {

    state ={
        name :this.props.name,
        age :28,
        surname :"Khan"
    }

    // constructor(props){
//     super(props);
//     this.state ={
//         name :this.props.name,
//         age :28,
//     }
// }

changeName(){
this.setState ({
 name :"Welcome here",
 //name :this.state.name+1
 age : 39,
 surname:"ali"
})
}

  render() {
    return (
      <div>
        <h2>{this.state.name} </h2>
        <h2>{this.state.age} </h2>
        <h2>{this.state.surname} </h2>
       <input type="button" value ="click" onClick={()=>this.changeName()}/>

      </div>
    )
  }
}
