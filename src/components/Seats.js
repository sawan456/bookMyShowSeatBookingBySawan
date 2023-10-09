import React, { useState } from 'react'
import PremiumSeats from './PremiumSeats'
import Standard from './Standard'
import Data from '../seatData'

const Seats = () => {
  
  const[backgroundColor,setBackgroundColor] = useState("white");
  
  const availableSeat=(i)=>{
    setBackgroundColor((e)=>e!= "green"?"green":"white");
  }
  
  return (
    <>
    <div style={{height:"31rem",
    display:"flex",
    justifyContent:"space-around",
    border:"1px solid red",
    marginLeft:"25rem",
    marginRight:"25rem"
}}>
        {/* Premium seats start */}
        <PremiumSeats/>
        {/* Premium seats end  */}

        {/* Standard seats start here */}
        <Standard/>
        {/* Standard seats End here */}
    </div>
    
    </>
  )
}

export default Seats