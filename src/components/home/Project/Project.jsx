import React from "react"
import Blogdata from "./Blogdata"
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight"

const Project = ({ProjectRef}) => {
  return (
    <>
      <section ref={ProjectRef} className='blog Services'>
        <div className='container topMarign'>
          <div className='heading'>
            <h3>PROJECTS</h3>
            <h1 style={{fontSize:'40px'}}>My Web Development Projects</h1>
          </div>

          <div className='contain grid topMarign'>
            {Blogdata.map((val,index) => {
              return (
                <div key={index} className='box'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                  <div className='text'>
                    <h2 style={{marginTop:0}}>{val.title}</h2>
                    <p>{val.desc}</p>
                    <a href={val.url}>
                      Read More
                      <KeyboardDoubleArrowRightIcon className='icon' />
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Project
