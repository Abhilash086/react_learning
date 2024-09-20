// Class Components
// import { Component } from "react";

// class App extends Component{
//   render(){
//     return <h1>Hello Class</h1>
//   }
// }

// Functional Components 
const numbers = [1,2,3,4,5]

function App(){
  return (
    <>
      <ul>
      {numbers.map(num=>(
        <li key={Math.random()}>{num}</li>
      ))}
      </ul>
    </>
  )
}

export default App;