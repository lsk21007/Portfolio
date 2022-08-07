import React from "react"

const Experiences = ({ExperiencesRef}) => {

  const data = [
    {
      title1: "06-2022/ present - Front-End Deveoper \n IFENG (Auto channel)",
      phrase1: "1. Build new feature: \n Collaborated with senior-level developers to build a lucky draw feature and use React Router to link the new page to other web pages. \n 2. Maintain websites: \n Assisted the development team in maintaining websites including content updates, debugging, feature enhancements and testing.\n 3. Optimize compatibility: \n Developed cross-device compatibility and optimized mobile web layout.",
      title2: "08-2014/ 08-2021 - Senior Web Planning Manager \n XCAR",
      desc2: "1. Webpage Designing:\n Design new channels (EV, Cross Country Channel) and features (Short Video Sharing), provide webpage layout, features and article types ideas to the web development department.\n 2. Website Analysing:\n Analyze users browsing preferences by utilizing the data of users' paths from the data platform. Provide the best plan for the client to cooperate.\n 3. Web Event Planning:\n According to the data analysis result, designing web activities to attract the users and promote the product for clients.",
    },
  ]
  return (
    <>
      <section ref={ExperiencesRef} className='about' style={{ marginBottom: '20px' }}>
        <div className='container'>
          {data.map((value, index) => {
            return (
              <span key={index}  className='flex'>
                <div className='mtop left'>
                  <div className='heading'>
                    <h3>About Me</h3>
                    <h1 style={{ whiteSpace: 'pre-line' }}>{value.title1}</h1>
                  </div>
                  <p style={{ whiteSpace: 'pre-line'}}>{value.phrase1}</p>
                </div>
                <div className='mtop right'>
                  <div className='heading'>
                    <h3>&nbsp;</h3>
                  </div>
                  <div className='heading'>
                    <h1 style={{ whiteSpace: 'pre-line' }}>{value.title2}</h1>
                  </div>
                  <p style={{ whiteSpace: 'pre-line' }}>{value.desc2}</p>
                </div>
              </span>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Experiences
