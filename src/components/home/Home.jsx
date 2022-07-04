import React from "react"

const Home = ({homeRef}) => {

  return (
    <>
      <section className='home' ref={homeRef}>
        <div className='container flex'>
          <div className='left '>
            <div className='img'>
              <img style={{margin:'40px',width:'80%'}} src='./assets/photo.jpg' alt='me' />
            </div>
          </div>
          <div className='right topMarign'>
            <h1>
              I am a <br />
              web developer
            </h1>
            <p>Lorem ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a href="https://github.com/lsk21007/Portfolio/raw/main/Resume.pdf"><button className='primary-btn'>Download CV</button></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
