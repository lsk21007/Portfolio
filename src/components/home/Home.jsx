import React from "react"

const Home = ({ homeRef }) => {

  return (
    <>
      <section className='home' ref={homeRef}>
        <div className='container flex'>
          <div className='left '>
            <div className='img'>
              <img style={{ margin: '40px', width: '80%' }} src='./assets/photo.jpg' alt='me' />
            </div>
          </div>
          <div className='right topMarign'>
            <h1>
              I am a <br />
              web developer
            </h1>
            <br />
            <p style={{margin:0}}>• 10 hours of web programming study per day for 1.5 years. Familiar with designing, developing, and deploying apps.</p>
            <p style={{margin:0}}>• 7 years of website product planning, webpage designing, and commercialization, expertise in making websites more user-friendly.</p>
            <p>• Great passion for web development, eager to learn. Keep improving my coding skills every day.</p>
            <a href="https://github.com/lsk21007/Portfolio/raw/main/Resume.pdf"><button className='primary-btn'>Download CV</button></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
