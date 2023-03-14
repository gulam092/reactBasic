import React from 'react'
import './App.css';




function clickFunction(props) {
    const HelloFunction =(name) =>{
   alert("Hello"+name)
    }
  return (
    <div className='App'>
        <input type ="button" value ="click" onClick={()=>HelloFunction(props.name)}/>
    </div>
  )
}


// import React, { Component } from 'react'

// export default class clickFunction extends Component {
//      HelloFunction(){
//                 alert("hello")
//              }
//   render() {
//     return (
//       <div className='App'>
//          <input type ="button" value ="click" onClick={this.HelloFunction}/>
//       </div>
//     )
//   }
// }



// function clickFunction() {
//     function HelloFunction(){
//         alert("hello")
//     }
//   return (
//     <div className='App'>
//         <input type ="button" value ="click" onClick={HelloFunction}/>
//     </div>
//   )
// }

 export default clickFunction