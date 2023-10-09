import React, { useState } from 'react'

const PremiumSeats = () => {
  
  const [backgroundColor,setBackgroundColor] = useState("white")
  const [error,setError] = useState(false);
  
  const PresentSeat=()=>{
    if(!error){
      setBackgroundColor("#1ea83c");
      setError(true)
    }
    else if(error){
      setBackgroundColor("white");
      setError(false)
    }
  }

  return (
    <>
{/* group A */}
    
  <div>
    {/* part one */}
  
    <div style={{display:"flex",margin:"1rem",marginRight:"1rem"}}>
      
    <div>
    <div style={{width:"1rem",height:"1rem",margin:"1rem",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center"}}></div>
    <div style={{width:"1rem",height:"1rem",backgroundColor:"black",color:"white",margin:"1rem",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center"}}>Q</div>
    <div style={{width:"1rem",height:"1rem",backgroundColor:"black",color:"white",margin:"1rem",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center"}}>P</div>
    <div style={{width:"1rem",height:"1rem",backgroundColor:"black",color:"white",margin:"1rem",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center"}}>N</div>
    <div style={{width:"1rem",height:"1rem",backgroundColor:"black",color:"white",margin:"1rem",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center"}}>M</div>
    
    </div>

    <div>
    <div style={{width:"1rem",height:"1rem",backgroundColor:"black",color:"white",margin:"1rem",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center"}}>1</div>
    <div style={{width:"1rem",height:"1rem",border:"1px solid #1ea83c",margin:"1rem",backgroundColor:`${backgroundColor}`}} onClick={PresentSeat} ></div>
    <div style={{width:"1rem",height:"1rem",border:"1px solid #1ea83c",margin:"1rem",backgroundColor:`${backgroundColor}`}} onClick={PresentSeat} ></div>
    <div style={{width:"1rem",height:"1rem",backgroundColor:"grey",margin:"1rem"}}></div>
    <div style={{width:"1rem",height:"1rem",border:"1px solid #1ea83c",margin:"1rem",backgroundColor:`${backgroundColor}`}} onClick={PresentSeat} ></div>
    
    </div>
    
    <div>
    <div style={{width:"1rem",height:"1rem",backgroundColor:"black",color:"white",margin:"1rem",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center"}}>2</div>
    <div style={{width:"1rem",height:"1rem",backgroundColor:"grey",border:"1px solid #1ea83c",margin:"1rem"}}></div>
    <div style={{width:"1rem",height:"1rem",border:"1px solid #1ea83c",margin:"1rem",backgroundColor:`${backgroundColor}`}} onClick={PresentSeat} ></div>
    <div style={{width:"1rem",height:"1rem",border:"1px solid #1ea83c",margin:"1rem",backgroundColor:`${backgroundColor}`}} onClick={PresentSeat} ></div>
    <div style={{width:"1rem",height:"1rem",border:"1px solid #1ea83c",margin:"1rem",backgroundColor:`${backgroundColor}`}} onClick={PresentSeat} ></div>
    
    </div>
    <div>
    <div style={{width:"1rem",height:"1rem",backgroundColor:"black",color:"white",margin:"1rem",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center"}}>3</div>
    <div style={{width:"1rem",height:"1rem",border:"1px solid #1ea83c",margin:"1rem",backgroundColor:`${backgroundColor}`}} onClick={PresentSeat} ></div>
    <div style={{width:"1rem",height:"1rem",border:"1px solid #1ea83c",margin:"1rem",backgroundColor:`${backgroundColor}`}} onClick={PresentSeat} ></div>
    <div style={{width:"1rem",height:"1rem",border:"1px solid #1ea83c",margin:"1rem",backgroundColor:`${backgroundColor}`}} onClick={PresentSeat} ></div>
    <div style={{width:"1rem",height:"1rem",border:"1px solid #1ea83c",margin:"1rem",backgroundColor:`${backgroundColor}`}} onClick={PresentSeat} ></div>
    
    </div>
    <div>
    <div style={{width:"1rem",height:"1rem",backgroundColor:"black",color:"white",margin:"1rem",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center"}}>4</div>
    <div style={{width:"1rem",height:"1rem",border:"1px solid #1ea83c",margin:"1rem",backgroundColor:`${backgroundColor}`}} onClick={PresentSeat} ></div>
    <div style={{width:"1rem",height:"1rem",border:"1px solid #1ea83c",margin:"1rem",backgroundColor:`${backgroundColor}`}} onClick={PresentSeat} ></div>
    <div style={{width:"1rem",height:"1rem",border:"1px solid #1ea83c",margin:"1rem",backgroundColor:`${backgroundColor}`}} onClick={PresentSeat} ></div>
    <div style={{width:"1rem",height:"1rem",border:"1px solid #1ea83c",backgroundColor:"grey",margin:"1rem"}}></div>
    
    </div>
    </div>
    
    {/* Part two */}
    <div style={{display:"flex"}}>

    <div>
    <div style={{width:"1rem",height:"1rem",backgroundColor:"black",color:"white",margin:"1rem",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center"}}>L</div>
    <div style={{width:"1rem",height:"1rem",backgroundColor:"black",color:"white",margin:"1rem",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center"}}>K</div>
    <div style={{width:"1rem",height:"1rem",backgroundColor:"black",color:"white",margin:"1rem",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center"}}>J</div>
    
    </div>
    <div>
    
    <div style={{width:"1rem",height:"1rem",border:"1px solid #1ea83c",margin:"1rem",backgroundColor:`${backgroundColor}`}} onClick={PresentSeat} ></div>
    <div style={{width:"1rem",height:"1rem",backgroundColor:"grey",border:"1px solid #1ea83c",margin:"1rem"}}></div>
    <div style={{width:"1rem",height:"1rem",border:"1px solid #1ea83c",margin:"1rem",backgroundColor:`${backgroundColor}`}} onClick={PresentSeat} ></div>
    </div>
    
    <div>

    <div style={{width:"1rem",height:"1rem",border:"1px solid #1ea83c",margin:"1rem",backgroundColor:`${backgroundColor}`}} onClick={PresentSeat} ></div>
    <div style={{width:"1rem",height:"1rem",border:"1px solid #1ea83c",margin:"1rem",backgroundColor:`${backgroundColor}`}} onClick={PresentSeat} ></div>
    <div style={{width:"1rem",height:"1rem",border:"1px solid #1ea83c",margin:"1rem",backgroundColor:`${backgroundColor}`}} onClick={PresentSeat} ></div>
    </div>
    <div>

    <div style={{width:"1rem",height:"1rem",border:"1px solid #1ea83c",margin:"1rem",backgroundColor:`${backgroundColor}`}} onClick={PresentSeat} ></div>
    <div style={{width:"1rem",height:"1rem",backgroundColor:"grey",border:"1px solid #1ea83c",margin:"1rem"}}></div>
    <div style={{width:"1rem",height:"1rem",border:"1px solid #1ea83c",margin:"1rem",backgroundColor:`${backgroundColor}`}} onClick={PresentSeat} ></div>
    
    </div>
    

    <div>
  
    <div style={{width:"1rem",height:"1rem",border:"1px solid #1ea83c",margin:"1rem",backgroundColor:`${backgroundColor}`}} onClick={PresentSeat} ></div>
    <div style={{width:"1rem",height:"1rem",border:"1px solid #1ea83c",margin:"1rem",backgroundColor:`${backgroundColor}`}} onClick={PresentSeat} ></div>
    <div style={{width:"1rem",height:"1rem",border:"1px solid #1ea83c",margin:"1rem",backgroundColor:`${backgroundColor}`}} onClick={PresentSeat} ></div>
    </div>
    </div>

    {/* Part three */}
    <div style={{display:"flex"}}>
    <div>
    <div style={{width:"1rem",height:"1rem",backgroundColor:"black",color:"white",margin:"1rem",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center"}}>H</div>
    <div style={{width:"1rem",height:"1rem",backgroundColor:"black",color:"white",margin:"1rem",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center"}}>G</div>
    <div style={{width:"1rem",height:"1rem",backgroundColor:"black",color:"white",margin:"1rem",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center"}}>F</div>
    <div style={{width:"1rem",height:"1rem",backgroundColor:"black",color:"white",margin:"1rem",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center"}}>E</div>
    
    </div>
    
    <div>
    <div style={{width:"1rem",height:"1rem",border:"1px solid #1ea83c",margin:"1rem",backgroundColor:`${backgroundColor}`}} onClick={PresentSeat} ></div>
    <div style={{width:"1rem",height:"1rem",border:"1px solid #1ea83c",margin:"1rem",backgroundColor:`${backgroundColor}`}} onClick={PresentSeat} ></div>
    <div style={{width:"1rem",height:"1rem",border:"1px solid #1ea83c",margin:"1rem",backgroundColor:`${backgroundColor}`}} onClick={PresentSeat} ></div>
    <div style={{width:"1rem",height:"1rem",border:"1px solid #1ea83c",margin:"1rem",backgroundColor:`${backgroundColor}`}} onClick={PresentSeat} ></div>
    </div>
    
    <div>
    <div style={{width:"1rem",height:"1rem",border:"1px solid #1ea83c",margin:"1rem",backgroundColor:`${backgroundColor}`}} onClick={PresentSeat} ></div>
    <div style={{width:"1rem",backgroundColor:"grey",height:"1rem",border:"1px solid #1ea83c",margin:"1rem"}}></div>
    <div style={{width:"1rem",height:"1rem",border:"1px solid #1ea83c",margin:"1rem",backgroundColor:`${backgroundColor}`}} onClick={PresentSeat} ></div>
    <div style={{width:"1rem",height:"1rem",border:"1px solid #1ea83c",margin:"1rem",backgroundColor:`${backgroundColor}`}} onClick={PresentSeat} ></div>
    
    </div>

    <div>
    <div style={{width:"1rem",height:"1rem",border:"1px solid #1ea83c",margin:"1rem",backgroundColor:`${backgroundColor}`}} onClick={PresentSeat} ></div>
    <div style={{width:"1rem",backgroundColor:"grey",height:"1rem",border:"1px solid #1ea83c",margin:"1rem"}}></div>
    <div style={{width:"1rem",height:"1rem",border:"1px solid #1ea83c",margin:"1rem",backgroundColor:`${backgroundColor}`}} onClick={PresentSeat} ></div>
    <div style={{width:"1rem",height:"1rem",border:"1px solid #1ea83c",margin:"1rem",backgroundColor:`${backgroundColor}`}} onClick={PresentSeat} ></div>
    
    </div>
    <div>
    <div style={{width:"1rem",height:"1rem",border:"1px solid #1ea83c",margin:"1rem",backgroundColor:`${backgroundColor}`}} onClick={PresentSeat} ></div>
    <div style={{width:"1rem",height:"1rem",backgroundColor:"grey",border:"1px solid #1ea83c",margin:"1rem"}}></div>
    <div style={{width:"1rem",height:"1rem",border:"1px solid #1ea83c",margin:"1rem",backgroundColor:`${backgroundColor}`}} onClick={PresentSeat} ></div>
    <div style={{width:"1rem",height:"1rem",border:"1px solid #1ea83c",margin:"1rem",backgroundColor:`${backgroundColor}`}} onClick={PresentSeat} ></div>
    
    </div>

    </div>
    
    </div>
    {/* end of Group A */}
    
    </>
  )
}

export default PremiumSeats