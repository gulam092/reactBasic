


import React, { Component } from 'react'

 class customer extends Component {
constructor(){
    super()
    this.state ={
        name: "Kumar",
        age: 27
    }
}

  render() {
    const{name,age} = this.props
    return (
      <div>
        <h1>{name}</h1>
     <h1>{age}</h1>
      </div>
    )
  }
}
export default customer
// function customer(props) { // Destructure 
//     const {name ,age} =props
//   return (
//     <div>
//     <h1>{name}</h1>
//     <h1>{age}</h1>

//     </div>
//   )
// }

// export default customer