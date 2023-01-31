import React from "react"
// Import Worker
import { Worker } from '@react-pdf-viewer/core';
// Import the main Viewer component
import { Viewer } from '@react-pdf-viewer/core';
import Certificate from "../../works/certificate.pdf"

const Education = ({ EducationRef }) => {
  const data = [
    {
      id: "9/2021-7/2022",
      heading: "New York Institude of Technology",
      dilopma: "Master's Degree of Energy Management",
      desc: "Study energy management, coding language, and data analysis. Run energy consumption models through Python, visualize results and finish optimization reports to achieve energy savings.",
      // work: Certificate
    },
    {
      id: "9/2021-12/2021",
      heading: "Udemy",
      dilopma: "Certificate of Web Development Bootcamp",
      desc: "Front-End: React, Javascript, Typescript, HTML5, CSS3, Bootstrap. Back-End: Node.js, Express, MongoDB. Build 16 web projects individually",
      // work: Certificate
    },
    {
      id: "3/2021-8/2021",
      heading: "ITheima",
      dilopma: "Front-End Developer Tutorial",
      desc: "Courses including: HTML, CSS, React, JavaScript, TypeScript, jQuery, Bootstrap, MUI, etc. Learn basic data structure.",
    },
  ]

  return (
    <>
      <section ref={EducationRef} className='Branding'>
        <div style={{ display: "flex", justifyContent: 'center' }}>
          <h3>Education</h3>
        </div>
        <div style={{ display: "flex", justifyContent: 'center' }}>
          <h2 style={{ fontSize: '40px', marginBottom: '20px' }}>Focus on Wed Development Study</h2>
        </div>
        <div className='container grid'>
          {data.map((value, index) => {
            return (
              <div key={index}>
                <div className='box flex'>
                  <div className='text'>
                    <h1>{value.id}</h1>
                  </div>
                  <div className='para'>
                    <h2>{value.heading}</h2>
                    <h4 style={{ marginBottom: '10px' }}>{value.dilopma}</h4>
                    <p style={{ marginBottom: '20px' }}>{value.desc}</p>
                  </div>
                </div>
                {value.work &&
                  <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
                    <Viewer fileUrl={value.work}></Viewer>
                  </Worker>}
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Education
