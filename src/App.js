import React from 'react'
import Selecting from './components/Selecting'
import Seats from './components/Seats'

const App = () => {
  return (
    <div>
      <Selecting/>
     
      <Seats/>
      <button onClick={()=>alert("Successfully Booked...!")} style={{marginTop:"1rem",marginLeft:"65%",width:"6rem",height:"2rem",backgroundColor:"crimson",fontWeight:"700",color:"white",cursor:"pointer"}}>Proceed</button>
      
    </div>
  )
}

export default App