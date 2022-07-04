import React from "react"

const Footer = () => {
  return (
    <>
      <div style={{backgroundColor:'black',height:'60px',color:'white',display:'flex',justifyContent:'center',alignItems:'center',fontWeight:'bold'}}>
      <button onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}>Back to top</button></div>
    </>
  )
}

export default Footer
