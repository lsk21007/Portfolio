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
            <p style={{margin:0}}>• Extensive web development working experience with hands-on designing, developing, and implementing applications skills.</p>
            <p style={{margin:0}}>• Detail-oriented developer, strong focus on clean and effective code, keen awareness of potential problems.</p>
            <p>• Great passion for web development, eager to teach and learn. Good cooperation with team members.</p>
            <a href="https://github.com/lsk21007/Portfolio/raw/main/Resume.pdf"><button className='primary-btn'>Download CV</button></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
