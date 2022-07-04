import React from "react"

const Experiences = ({ExperiencesRef}) => {

  const data = [
    {
      title1: "06-2022/ present - Front-End Deveoper \n QUNAR",
      phrase1: "1. Build new feature: \n Collaborated with senior-level developers to build a lucky draw feature and use React Router to link the new page to other web pages. \n 2. Mantain websites: \n Identified the problems from the e-mail, including content updates, debugging and testing to meet the senior developer's requirement.",
      title2: "08-2014/ 08-2021 - Senior Product Planning Manager \n XCAR",
      desc2: "1. Website Analysing:\n Analyze users browsing preferences by utilizing the data of users' paths from the data platform. Provide the best plan for the client to cooperate.\n 2. Web Event Planning:\n According to the data analysis result, designing web activities to attract the users and promote the product for clients. \n 3. New Features Planning Plan new channels and features, thus increasing the interest by providing special information and interactions with users.",
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
