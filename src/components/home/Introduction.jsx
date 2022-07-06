import React from "react"

const Introduction = ({ IntroductionRef }) => {
  const data = [
    {
      title: "Self Introduction",
      heading: "Not The Best, But The Most Potential",
      desc: "As a big fan of programming, I would like to use my website planning and coding skills to design, develop and deploy apps. Every time bug I fix, every new feature I create satisfies me. I’m driven by continually trying to elevate my level and trying my best to achieve more goals. Now, I’m well prepared to contribute to my next company and still getting better every day. I may not be the best, but the most potential.",
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
