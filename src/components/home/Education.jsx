import React from "react"

const Education = ({EducationRef}) => {
  const data = [
    {
      id: "9/2021-7/2022",
      heading: "New York Institude of Technology",
      dilopma: "Master's Degree of Energy Management",
      desc: "Lorem ipsum dolor sit amet, provid adipisicing elit. Aliquam dolorum nu illo similique! Impedit.",
    },
    {
      id: "9/2021-12/2021",
      heading: "Team Management",
      dilopma: "Certificate of Web Development Bootcamp",
      desc: "Front-End: React, Javascript, Typescript, HTML5, CSS3, Bootstrap. Back-End: Node.js, Express, MongoDB.",
    },
    {
      id: "3/2021-8/2021",
      heading: "Front-End Developer Tutorial",
      desc: "HTML5, CSS3, Javascript, React. 111 11111 11111111 11111 11111111 111111 1111111 11111111 1111 111",
    },
  ]
  return (
    <>
      <section ref={EducationRef} className='Branding'>
        <div style={{ display: "flex", justifyContent: 'center' }}>
          <h3>Education</h3>
        </div>
        <div style={{ display: "flex", justifyContent: 'center' }}>
          <h2 style={{fontSize:'40px', marginBottom:'20px'}}>Focus on Wed Development Study</h2>
        </div>
        <div className='container grid'>
          {data.map((value, index) => {
            return (
              <div key={index} className='box flex'>
                <div className='text'>
                  <h1>{value.id}</h1>
                </div>
                <div className='para'>
                  <h2>{value.heading}</h2>
                  <h4 style={{ marginBottom: '10px' }}>{value.dilopma}</h4>
                  <p>{value.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Education
