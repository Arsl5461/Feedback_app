import React from 'react'
import Loading from "../shared/Loading_icon.gif"
function Spinner() {
  return (
   <img src={Loading} alt="Loading Text" style={{width:'100px',margin:'auto',display:'block'}}/>
  )
}

export default Spinner