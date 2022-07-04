import React from "react"

const Introduction = ({ IntroductionRef }) => {
  const data = [
    {
      title: "Self Introduction",
      heading: "Not The Best, But The Most Protential",
      desc: "Seven years of web marketing planning experience, familiar with users' browsing habits. Built many website programs myself by using the MERN stack that learned from tutorials and university. With the skills and projects, I got a chance to be an internship front-end developer on a travel site and have good cooperation with colleagues. Programming is my passion. Learning is my style. I'm not the best candidate, but I'm the one with the most potential.",
    },
  ]
  return (
    <>
      <section ref={IntroductionRef} className='Branding wrapper'>
        <div className='container'>
          {data.map((value, index) => {
            return (
              <div key={index} className='box'>
                <h3>{value.title}</h3>
                <h2>{value.heading}</h2>
                <p>{value.desc}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Introduction
