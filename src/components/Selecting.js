import React, { useState } from 'react'
import data from '../seatData'

const Selecting = () => {
  
  // const [standard,setStandard] = useState([]);
  // const [Premium,setPremium] = useState([]);

  const standard = ()=>{
    data.map((val,i)=>{
      const {id,name,ticketType} = val;
      return (
        <div><button>{ticketType}</button>
        </div>
      )
    })
  }
  const Premium = ()=>{
    data.map((val,i)=>{
      const {id,name,ticketType} = val;
      return (
        <div><button>{ticketType}</button>
        </div>
      )
    })
  } 

  return (
        <div style={{textAlign:"center"}}>
        <h2>USER INTERFACE</h2>
        {/* for Ticket Type */}
        <select style={{width:"10rem",height:"2.5rem",margin:"1rem"}}>
            <option value="Ticket Type">Ticket Type</option> 
            <option value="Standard" onClick={standard} >Standard</option> 
            <option value="Premium" onClick={Premium}>Premium</option> 
        </select>
        {/* for Seat Number */}
        <select style={{width:"4rem",height:"2.5rem",margin:"1rem"}}>
            <option value="Qty">Qty</option> 
            <option value={10}>1</option>
            <option value={20}>2</option>
            <option value={30}>3</option>
            <option value={40}>4</option>
            <option value={50}>5</option>
            <option value={60}>6</option>
            <option value={70}>7</option>
            <option value={80}>8</option>
            <option value={90}>9</option>
            <option value={100}>10</option>
        </select>
        </div>
  )
}

export default Selecting