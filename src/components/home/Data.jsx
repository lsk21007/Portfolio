import React from "react"

const Data = () => {
  const data = [
    {
      num: "5",
      text: "NEW PAGES DESIGNING",
    },
    {
      num: "1.3+",
      text: "MILLION DAILY VIEWS",
    },
    {
      num: "25+",
      text: "MILLION DOLLAR INCOMES",
    },
    {
      num: "3",
      text: "EMPLOYEES MANAGEMENT",
    }
  ]
  return (
    <>
      <section className='Branding wrapperOne'>
        <div style={{ display: "flex", justifyContent: 'center' }}>
          <h2 style={{ fontSize: '40px', marginBottom: '20px',color:'black' }}>Contribution to Company</h2>
        </div>
        <div className='container grid1'>
          {data.map((value, index) => {
            return (
              <div key={index} className='box'>
                <h1>{value.num}</h1>
                <p>{value.text}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Data
